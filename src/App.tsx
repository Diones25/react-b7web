import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { SignUpFormSchema } from "./schemas/SignUpFormSchema";


const Page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SignUpFormSchema)
  });

  const handleSignUpForm = () => {
    alert('vai enviar')
  }

  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleSignUpForm)}>
          <div>
            <input
              {...register('name')}
              className="border border-white p-3 m-3 text-black"
              placeholder="Digite seu nome"
            />
            {errors.name && <p className="text-red-500">{ errors.name.message as string }</p>}
          </div>

          <div>
            <input
              {...register('lastName')}
              className="border border-white p-3 m-3 text-black"
              placeholder="Digite seu sobrenome"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message as string}</p>}
          </div>

          <div>
            <input
              {...register('age', { valueAsNumber: true })}
              className="border border-white p-3 m-3 text-black"
              placeholder="Digite sua idade"
            />
            {errors.age && <p className="text-red-500">{errors.age.message as string}</p>}
          </div>

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