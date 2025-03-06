#!/bin/bash

# Exit on error
set -e

BASE_DIR="/home/nara/speller-front"
REPO_URL="https://github.com/frontend-opensource-project/speller-front.git"
BRANCH="deploy"
LOG_FILE="${BASE_DIR}/setup.log"

log() {
  local message="$1"
  local timestamp=$(date "+%Y-%m-%d %H:%M:%S")
  echo "[${timestamp}] ${message}"
  echo "[${timestamp}] ${message}" >> "$LOG_FILE"
}

log "Setting up staging environment at ${BASE_DIR}"

# Create base directory if it doesn't exist
if [ ! -d "$BASE_DIR" ]; then
  log "Creating project directory"
  mkdir -p "$BASE_DIR"
  
  log "Cloning repository"
  git clone "$REPO_URL" "$BASE_DIR" >> "$LOG_FILE" 2>&1
  
  cd "$BASE_DIR"
  log "Checking out ${BRANCH} branch"
  git checkout -b "$BRANCH" >> "$LOG_FILE" 2>&1
else
  log "Project directory already exists"

  log "Updating repository"
  cd "$BASE_DIR"
  git fetch origin >> "$LOG_FILE" 2>&1
  
  if git show-ref --verify --quiet refs/heads/"$BRANCH"; then
    log "Checking out existing ${BRANCH} branch"
    git checkout "$BRANCH" >> "$LOG_FILE" 2>&1
  else
    log "Creating ${BRANCH} branch"
    git checkout -b "$BRANCH" >> "$LOG_FILE" 2>&1
  fi
fi

# Copy deployment script
log "Copying deployment script"
chmod +x /home/nara/speller-front/deploy.sh >> "$LOG_FILE" 2>&1

# Check for environment file
if [ ! -f "$BASE_DIR/.env.staging" ]; then
  log "ERROR: .env.staging file not found."
  log "Please create the environment file manually with the following command:"
  log "cat > \"$BASE_DIR/.env.staging\" << EOF"
  log "NEXT_PUBLIC_BASE_URL=your_base_url_here"
  log "NEXT_PUBLIC_API_KEY=your_api_key_here"
  log "NODE_ENV=development"
  log "EOF"
  exit 1
fi

# Install dependencies
log "Installing dependencies"
cd "$BASE_DIR"
npm install >> "$LOG_FILE" 2>&1

# Build application
log "Building application"
npm run build >> "$LOG_FILE" 2>&1

# Setup PM2
log "Setting up PM2"
if pm2 list | grep -q "speller-front-staging"; then
  log "Restarting PM2 process"
  pm2 restart speller-front-staging >> "$LOG_FILE" 2>&1
else
  log "Creating new PM2 process"
  pm2 start npm --name "speller-front-staging" -- run start -- -p 3000 >> "$LOG_FILE" 2>&1
fi

log "Staging environment setup complete!"
log "You can access the staging environment at: http://110.15.18.54:3000"