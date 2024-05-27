import { useState } from "react";

const State = () => {
  const [ count, setCount ] = useState(0);
  
  const handleClickButton = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClickButton} className='bg-blue-400 px-2'>+1</button>
    </div>
  )
}

export default State
