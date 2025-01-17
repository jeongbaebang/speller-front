interface NoopStorage {
  getItem(key: string): Promise<unknown | null>
  setItem(key: string, value: unknown): Promise<unknown>
  removeItem(key: string): Promise<void>
}

const createNoopStorage = (): NoopStorage => {
  return {
    getItem() {
      return Promise.resolve(null)
    },
    setItem(_key: string, value: unknown) {
      return Promise.resolve(value)
    },
    removeItem() {
      return Promise.resolve()
    },
  }
}

export { createNoopStorage }
