import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { SignUpFormSchema } from "./schemas/SignUpFormSchema";


const Page = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(SignUpFormSchema)
  });

  const handleSignUpForm = () => {
    alert('vai enviar')
  }

  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleSignUpForm)}>
          <input
            {...register('name')}
            className="border border-white p-3 m-3 text-black"
            placeholder="Digite seu nome"
          />
          <input
            {...register('lastName')}
            className="border border-white p-3 m-3 text-black"
            placeholder="Digite seu sobrenome"
          />
          <input
            {...register('age', { valueAsNumber: true })}
            className="border border-white p-3 m-3 text-black"
            placeholder="Digite sua idade"
          />
          <input
            type="submit"
            value="Cadastrar"
            className="bg-blue-500 px-4 py-3"
          />
        </form>
      </div>
    </>
  )
}

export default Page