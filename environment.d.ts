interface ENVS {
  NEXT_PUBLIC_MONGODB_URI: string;
  NEXT_PUBLIC_VERCEL_URL: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ENVS {}
  }
}

export {};
