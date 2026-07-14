import type { PiniaPluginContext, StateTree } from 'pinia'

interface PersistOption {
  key?: string | ((key: string) => string)
  debug?: boolean
  storage?: Storage
  serializer?: {
    serialize: (value: unknown) => string
    deserialize: (value: string) => unknown
  }
  beforeHydrate?: (context: PiniaPluginContext) => void
  afterHydrate?: (context: PiniaPluginContext) => void
  pick?: string[]
  omit?: string[]
}

type PersistConfig = boolean | PersistOption | PersistOption[]

declare module 'pinia' {
  interface DefineStoreOptionsBase<S extends StateTree, Store> {
    persist?: PersistConfig
  }

  interface PiniaCustomProperties {
    $persist: () => void
    $hydrate: (opts?: { runHooks?: boolean }) => void
  }
}
