

const HoverStates = () => {
  return (
    <>
     <div className='container mx-auto'>
        <button className='bg-red-200 p-4 hover:bg-blue-200 active:bg-green-200'>Clique aqui</button>

        <div className="my-2"></div>
        
        <input disabled className='w-full h-7 border border-black m-3 focus:bg-green-200 disabled:bg-red-200' type="text" name="" id="" />
        <input 
          placeholder='Digite alguma coisa'
          className='w-full h-9 border border-black m-3 focus:bg-green-200 placeholder:text-black placeholder:p-2' 
          type="text" 
          name="" 
          id="" 
        />

        <input 
          className='w-full h-9  border border-gray-400 m-3 file:bg-green-300 file:text-white file:border-0 file:h-9' 
          type="file" 
          name="" 
          id="" 
        />
      </div> 
    </>
  )
}

export default HoverStates
