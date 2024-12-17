import { useState } from "react";

const StateUI = () => {
  const [ showSecret, setSohowSecret ] = useState(false);
  
  const handleClickButton = () => {
    setSohowSecret(!showSecret)
  }

  return (
    <div>
      <button onClick={handleClickButton} className='bg-blue-400 px-2'>
        {showSecret ? 'Ocultar': 'Mostar'}
      </button>

      {showSecret &&
        <div className="p-3 bg-blue-300 rounded-md mt-3">
          Área secreta
        </div>
      }
    </div>
  )
}

export default StateUI
