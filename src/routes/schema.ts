import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    org: z.string().min(1).max(250)
  });

export type FormSchema = typeof formSchema;
  