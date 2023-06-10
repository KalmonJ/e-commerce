import z from "zod";

interface ENVS {
  NEXT_PUBLIC_MONGODB_URI: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ENVS {}
  }
}
