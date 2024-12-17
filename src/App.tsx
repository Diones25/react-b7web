import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  name: string;
  lastName: string;
}

const Page = () => {
  const { handleSubmit, register } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>

          <input
            {...register('name')}
            className="border border-white p-3 text-black"
            placeholder="Digite seu nome"
          />

          <input
            {...register('lastName')}
            className="block mt-4 border border-white p-3 text-black"
            placeholder="Digite seu sobrenome"
          />

          <input type="submit" value="Enviar" />

        </form>
      </div>
    </>
  )
}

export default Page