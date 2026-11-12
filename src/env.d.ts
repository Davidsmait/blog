/// <reference path="../.astro/types.d.ts" />

interface Window {
  mode: {
    setMode: (mode: 'dark' | 'light') => void
    getMode: () => 'dark' | 'light'
  }
}

interface ImportMetaEnv {
  readonly SUPABASE_URL?: string
  readonly SUPABASE_ANON_KEY?: string
}
