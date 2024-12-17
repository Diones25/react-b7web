import { useContext } from "react"
import { CountContext } from "../contexts/CountContext";


const OnlineUsers = () => {
  const countCtx = useContext(CountContext);

  const handleBanAll = () => {
    countCtx?.setOnlineCount(0)
  }

  return (
    <div>
      <p>Online: {countCtx?.onlineCount}</p>
      <button onClick={handleBanAll}>Banir todo mundo</button>
    </div>
  )
}

export default OnlineUsers
