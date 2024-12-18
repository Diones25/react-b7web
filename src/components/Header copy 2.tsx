import { useContext } from "react"
import { LoggedUserContext } from "../contexts/LoggedUser"

const Header = () => {
  const loggedUserCtx = useContext(LoggedUserContext);

  const handleLogout = () => {
    loggedUserCtx?.setName('');
  }
  
  return (
    <header>
      <h1 className='text-3xl'>Título da página </h1>
      {loggedUserCtx?.name &&
        <>
          <p>Usuário logado: {loggedUserCtx?.name}</p>
          <button onClick={handleLogout}>Sair</button>        
        </>
      }
      {!loggedUserCtx || loggedUserCtx?.name === '' &&
        <p>Usuário DESLOGADO</p>
      }
    </header>
  )
}

export default Header
