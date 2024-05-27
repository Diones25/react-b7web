

const Login = () => {
  return (
    <>
      <div className='w-screen h-screen p-5 bg-gray-900'>
        <div className='mt-5 container mx-auto'>
          <h1 className='text-3xl font-bold text-center'>Sistema de Login</h1>
          <div className='my-6'>
            <label className='block text-lg mb-2' htmlFor="emailField">Endereço de e-mail</label>
            <input className='w-full p-2 rounded-md text-lg bg-gray-800 border-gray-600 outline-blue-500' type="email" name="" id="emailField" />
          </div>

          <div className='my-6'>
            <label className='block text-lg mb-2' htmlFor="passwordField">Senha</label>
            <input className='w-full p-2 rounded-md text-lg bg-gray-800 border-gray-600 outline-yellow-500' type="password" name="" id="passwordField" />
          </div>

          <div className='my-6'>
            <button className='w-full p-2 rounded-md text-lg font-bold border-none text-white bg-yellow-500'>Entrar</button>
          </div>

        </div>
        <div className='text-center text-gray-400'>
          Não é membro ? <a className='text-yellow-500 font-bold' href="">Faça seu cadastro agora</a>
        </div>
      </div>
    </>
  )
}

export default Login
