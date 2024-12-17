import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  name: string;
  lastName: string;
  age: number;
}

const Page = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>

          <input
            {...register('name', { required: true, minLength: 2, maxLength: 20 })}
            className="border border-white p-3 text-black"
            placeholder="Digite seu nome"
          />

          {errors.name?.type === 'required' && <p>Item obrigatório</p>}
          {errors.name?.type === 'minLength' && <p>Precisa ter dois caracteres</p>}
          {errors.name?.type === 'maxLength' && <p>Precisa ter no máximo vinte caracteres</p>}

          <input
            {...register('lastName')}
            className="block mt-4 border border-white p-3 text-black"
            placeholder="Digite seu sobrenome"
          />

          <input
            type="number"
            {...register('age', { required: 'Campo idade obrigatório', min: 18, max: 120 })}
            className="block mt-4 border border-white p-3 text-black"
            placeholder="Digite sua idade"
          />

          {errors.age && <p>{ errors.age.message }</p>}
          {errors.age?.type === 'min' && <p>Precisa ser maior de 18 anos</p>}
          {errors.name?.type === 'max' && <p>Pode ter no máximo 120 anos</p>}

          <input type="submit" value="Enviar" />

        </form>
      </div>
    </>
  )
}

export default Page