import z from "zod";

export const authValidator = z.object({
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(8, "your password must be at least 8 characters long"),
});

export type Auth = z.infer<typeof authValidator>;
