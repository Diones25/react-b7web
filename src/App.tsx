import { z } from 'zod';

const Page = () => {

  type signUpForm = {
    name: string;
    lastName: string;
    age: number;
  }

  const signUpForm = z.object({
    name: z.string().min(2).max(20),
    lastname: z.string().min(2).optional(),
    age: z.number().min(18)
  });

  return (
    <>
      <div className="container mx-auto">

      </div>
    </>
  )
}

export default Page