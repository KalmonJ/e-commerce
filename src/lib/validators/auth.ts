import z from "zod";
import { messages } from "./enums";

export const authValidator = z.object({
  email: z.string().email(messages.enum["Enter a valid email"]),
  password: z
    .string()
    .min(8, messages.enum["your password must be at least 8 characters long"]),
});

export type Auth = z.infer<typeof authValidator>;
