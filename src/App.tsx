import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpForm } from "./types/SignUpForm";
import InputReactHookForm from "./components/InputReactHookForm";

const Page = () => {
  const {
    control,
    handleSubmit,
    setValue
  } = useForm<SignUpForm>();

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>

          <InputReactHookForm
            control={control}
            name="name"
            rules={{ required: true, minLength: 2, maxLength: 20 }}
          />

          <InputReactHookForm
            control={control}
            name="lastName"
          />

          <InputReactHookForm
            control={control}
            name="age"
            rules={{ required: true, min: 18, max: 120 }}
          />

          <input type="submit" value="Enviar" />

        </form>

        <button onClick={() => setValue('age', 18)}>Definir como maior de idade</button>
      </div>
    </>
  )
}

export default Page