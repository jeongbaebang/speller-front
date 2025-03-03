#!/bin/bash

ENVIRONMENT=${1:-"staging"}

# Exit on error
set -e

BASE_DIR=$BASE_DIR

# Load NVM environment
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

NODE_VERSION=$(node -v)
NPM_VERSION=$(npm -v)

if [[ "$ENVIRONMENT" == "production" ]]; then
  BRANCH="main"
  APP_PORT="4000"
  PM2_NAME="speller-front"
  ENV_FILE=".env.production"
  NODE_ENV="production"
else
  BRANCH="deploy"
  APP_PORT="3000"
  PM2_NAME="speller-front-staging"
  ENV_FILE=".env.staging"
  NODE_ENV="development"
fi

# Log file setup
LOG_FILE="${BASE_DIR}/deploy-${ENVIRONMENT}.log"
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

log_cmd() {
  echo "[${TIMESTAMP}] Running: $1" >> "${LOG_FILE}"
  OUTPUT=$(eval "$1" 2>&1) || {
    EXIT_CODE=$?
    echo "[${TIMESTAMP}] ERROR (Exit code: ${EXIT_CODE}): Command failed" >> "${LOG_FILE}"
    echo "${OUTPUT}" >> "${LOG_FILE}"
    echo "[${TIMESTAMP}] ERROR: $1 failed with exit code ${EXIT_CODE}" >&2
    echo "${OUTPUT}" >&2
    return ${EXIT_CODE}
  }
  echo "${OUTPUT}" >> "${LOG_FILE}"
  echo "${OUTPUT}"
}

log() {
  echo "[${TIMESTAMP}] $1" | tee -a "${LOG_FILE}"
}

log "${ENVIRONMENT^} deployment started: ${TIMESTAMP}"
log "Using configuration: Branch=${BRANCH}, Port=${APP_PORT}, PM2=${PM2_NAME}"
log "Node version: ${NODE_VERSION}, NPM version: ${NPM_VERSION}"

# Change to project directory
log "Changing to project directory: ${BASE_DIR}"
cd $BASE_DIR || {
  log "ERROR: Cannot change to project directory"
  exit 1
}

# Pull latest code from branch
log "Pulling latest code from Git repository (${BRANCH} branch)"
log_cmd "git fetch origin"
log_cmd "git checkout ${BRANCH}"
log_cmd "git pull origin ${BRANCH}"

# Check environment variables
if [ ! -f ${ENV_FILE} ]; then
  log "ERROR: ${ENV_FILE} file not found. Please create the environment file manually."
  exit 1
fi

# Copy env to .env.local
log_cmd "cp ${ENV_FILE} .env.local"

# Install dependencies
log "Installing dependencies with NPM"
log_cmd "npm install"

# Build application
log "Building Next.js application"
log_cmd "npm run build"

# Start or restart with PM2
log "Starting/restarting application with PM2"
if pm2 list | grep -q "${PM2_NAME}"; then
  log "Restarting existing PM2 process"
  log_cmd "pm2 restart ${PM2_NAME} --update-env" || {
    log "WARNING: PM2 restart failed, attempting to start new process"
    if [[ "$ENVIRONMENT" == "production" ]]; then
      log_cmd "pm2 start npm --name '${PM2_NAME}' -- run start"
    else
      log_cmd "pm2 start npm --name '${PM2_NAME}' -- run start -- -p ${APP_PORT}"
    fi
  }
else
  log "Starting new PM2 process"
  if [[ "$ENVIRONMENT" == "production" ]]; then
    log_cmd "pm2 start npm --name '${PM2_NAME}' -- run start"
  else
    log_cmd "pm2 start npm --name '${PM2_NAME}' -- run start -- -p ${APP_PORT}"
  fi
fi

log "${ENVIRONMENT^} deployment completed: $(date +"%Y-%m-%d %H:%M:%S")"
