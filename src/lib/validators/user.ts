import z from "zod";
import { messages } from "./enums";

export const userValidator = z.object({
  username: z.string(),
  name: z.string(),
  email: z.string().email(messages.enum["Enter a valid email"]),
  password: z
    .string()
    .min(8, messages.enum["your password must be at least 8 characters long"]),
});

export type CreateUser = z.infer<typeof userValidator>;
