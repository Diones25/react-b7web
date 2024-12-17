import { useState } from "react";

const StateUpdater = () => {
  const [ count, setCount ] = useState(0);

  const handleBtnClick = () => {
    setCount(count + 2);
    setCount(c => c + 20);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-500 text-white p-3 rounded-md">+2</button>
    </div>
  )
}

export default StateUpdater
