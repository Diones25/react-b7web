import { z } from 'zod';

const Page = () => {

  type SignUpForm = {
    name: string;
    lastName: string;
    age: number;
  }

  const SignUpForm = z.object({
    name: z.string().min(2).max(20),
    lastname: z.string().min(2).optional(),
    age: z.number().min(18)
  });

  console.log(
  SignUpForm.parse({
    name: 'Diones',
    lastname: 'Alves',
    age: 25
  })
)

  return (
    <>
      <div className="container mx-auto">

      </div>
    </>
  )
}

export default Page