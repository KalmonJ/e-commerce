import z from "zod";

export const userValidator = z.object({
  username: z.string(),
  name: z.string(),
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(8, "your password must be at least 8 characters long"),
});

export type CreateUser = z.infer<typeof userValidator>;
