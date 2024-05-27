import { useState } from "react";

const StateForms = () => {
  const [ nameInput, setNameInput ] = useState('');

  return (
    <div>
      <input 
        className="border border-black p-2 text-xl text-black rounded" 
        placeholder="Digite seu nome" 
        type="text" 
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <p>Seu nome é {nameInput}</p>
    </div>
  )
}

export default StateForms
