import { z } from 'zod';

const Page = () => {

  const SignUpForm = z.object({
    name: z.string().min(2).max(20),
    lastName: z.string().min(2).optional(),
    age: z.number().min(18)
  });

  type SignUpObject = z.infer<typeof SignUpForm>;
  
  const obj: SignUpObject = {
    name: 'Diones',
    lastName: 'Alves',
    age: 18
  }

  return (
    <>
      <div className="container mx-auto">

      </div>
    </>
  )
}

export default Page