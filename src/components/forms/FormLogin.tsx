"use client";

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Auth, authValidator } from "@/lib/validators/auth";

const login = async (input: Auth) => {
  return fetch("/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
};

export const FormLogin = () => {
  const form = useForm({
    resolver: zodResolver(authValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: Auth) =>
    login(values)
      .then(async (res) => {
        const result = await res.json();
        if (!res.ok) throw new Error(result.message);
      })
      .catch((err) => console.log(err.message));

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex pt-3 flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="*******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default" size="default">
          Login
        </Button>
      </form>
    </Form>
  );
};
