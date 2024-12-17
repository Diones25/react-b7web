import { FormEvent } from 'react'

const FormPreventDefault = () => {

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("opa, tudo ok")
  }


  return (
    <>   
      <div className='container h-screen flex flex-col justify-center items-center bg-black text-white'>
        <h1 className="text-5xl mb-3">Form de Login</h1>
        <form onSubmit={handleFormSubmit} action="">
          <input type="text" name="" id="" />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  )
}

export default FormPreventDefault
