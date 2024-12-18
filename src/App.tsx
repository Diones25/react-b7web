import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SignUpForm } from "./types/SignUpForm";
import { Input } from "@mui/material";

const Page = () => {
  const {
    control,
    handleSubmit,
  } = useForm<SignUpForm>();

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>

          <Controller
            control={control}
            name="name"
            rules={{ required: true, minLength: 2, maxLength: 20 }}
            render={({ field, fieldState }) =>
              <Input
                {...field}
                placeholder="Digite seu nome"
              />
            }
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => <Input {...field} placeholder="Digite seu sobrenome" />}
          />

          <Controller
            control={control}
            name="name"
            rules={{ required: true, min: 18}}
            render={({ field }) => <Input {...field} placeholder="Digite sua idade" />}
          />

          <input type="submit" value="Enviar" />

        </form>
      </div>
    </>
  )
}

export default Page