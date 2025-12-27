/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_FORM_ID?: string;
  readonly GEMINI_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

