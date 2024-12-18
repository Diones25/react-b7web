import { z } from 'zod';

export const SignUpFormSchema = z.object({
  name: z.string().min(2).max(20),
  lastName: z.string().optional(),
  age: z.number().min(18)
});