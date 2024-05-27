import { useState } from "react";

const StateTempo = () => {
  const [ count, setCount ] = useState(0);

  const handleBtnClick = () => {
    setCount(count + 2);
    setCount(count + 2);
    setCount(count + 2);
    alert(count);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-500 text-white p-3 rounded-md">+2</button>
    </div>
  )
}

export default StateTempo
