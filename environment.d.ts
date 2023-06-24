interface ENVS {
  NEXT_PUBLIC_MONGODB_URI: string;
  NEXT_PUBLIC_VERCEL_URL: string;
  NEXT_PUBLIC_QA_VERCEL_URL: string;
  NEXT_PUBLIC_TEST_VERCEL_URL;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ENVS {}
  }
}

export {};
