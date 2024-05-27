import { useState } from "react"
import { Person } from "../types/Person2";

const StateUpdateObjects = () => {
  const [ fullName, setFullname ] = useState<Person>({ name: '', lastName: '' });

  const handleClearButton = () => {
    setFullname({ name: '', lastName: '' });
  }

  const handleClearButtonName = () => {
    setFullname({ ...fullName, name: '' });
  }

  return (
    <>
      <input 
        type="text" 
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"  
        value={fullName.name}
        onChange={e => setFullname({ ...fullName, name: e.target.value })}
      />
      <input 
        type="text" 
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"  
        value={fullName.lastName}
        onChange={e => setFullname({ ...fullName , lastName: e.target.value })}
      />
      <p>Meu nome é:</p>
      <p>{ fullName.name } { fullName.lastName }</p>

      <button onClick={handleClearButton}>Limpar tudo</button>
      <button onClick={handleClearButtonName}>Limpar nome</button>
    </>
  )
}

export default StateUpdateObjects
