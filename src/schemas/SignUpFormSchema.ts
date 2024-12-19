import { z } from 'zod';

export const SignUpFormSchema = z.object({
  name: z.string().min(2, { message: 'Precisa ter pelo menos dois caracteres' }).max(20, { message: 'Pode ter no máximo 20 caracteres' }),
  lastName: z.string().optional(),
  age: z.number({ invalid_type_error: 'Precisa ser um número' }).min(18, { message: 'Precisa ser maior de 18 anos' })
});