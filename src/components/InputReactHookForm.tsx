import { useController, UseControllerProps } from "react-hook-form";
import { SignUpForm } from "../types/SignUpForm";

function InputReactHookForm(props: UseControllerProps<SignUpForm>) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input
        {...field}
        placeholder={props.name}
        className={`border ${fieldState.invalid ? 'border-red-500 border-2' : 'border-white'} p-3 mt-4 text-black`}
      />
      {fieldState.error?.type === 'required' && <p className="text-red-500">Campo obrigatório</p>}
      {fieldState.error?.type === 'minLength' && <p className="text-red-500">Precisa ter dois caracteres</p>}
      {fieldState.error?.type === 'maxLength' && <p className="text-red-500">Precisa ter no máximo vinte caracteres</p>}
      {fieldState.error?.type === 'min' && <p className="text-red-500">Precisa ser maior de 18 anos</p>}
      {fieldState.error?.type === 'max' && <p className="text-red-500">Pode ter no máximo 120 anos</p>}
    </div>
  )
}

export default InputReactHookForm
