import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Card2 = ({ children }:Props) => {
  return (
    <>
      <div className="w-96 border-2 border-red-600 p-3 text-3xl text-center italic">
        { children } 
      </div> 
    </>
  )
}

export default Card2
