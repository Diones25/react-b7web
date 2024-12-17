import { useEffect } from "react"

export const Square = () => {

  useEffect(() => {
    window.addEventListener('scroll', () => {})
    
    return () => {
      window.removeEventListener('scroll', () => { })
    }
  })

  return (
    <>
      <div className='w-52 h-52 bg-orange-700 text-white'>
        Texto qualquer inspirador
      </div>
    </>
  )
}

export const Circle = () => {
  return (
    <>
      <div className='w-52 h-52 bg-orange-700 text-white rounded-full'>
        Texto qualquer inspirador
      </div>
    </>
  )
}
