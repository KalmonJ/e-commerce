"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  username: z.string(),
  name: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export const FormRegister = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  return (
    <section className="flex flex-col">
      <Form {...form}>
        <form className="flex flex-col pt-3 gap-4">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Display name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Register</Button>
        </form>
      </Form>
    </section>
  );
};
