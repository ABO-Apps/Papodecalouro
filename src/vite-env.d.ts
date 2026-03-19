/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GSHEETS_WEBHOOK_URL?: string;
  readonly VITE_GSHEETS_TOKEN?: string;
  readonly VITE_SHEET_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
