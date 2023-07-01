import z from "zod";

export const messages = z.enum([
  "your password must be at least 8 characters long",
  "Enter a valid email",
]);
