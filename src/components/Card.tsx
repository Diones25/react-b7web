

const Card = () => {
  return (
    <>
      <div className='w-96 rounded-md border-gray-400 bg-white p-4'>
        <div>
          <div className='inline-block'>
            <img
              className='w-14 h-14 rounded-full' 
              src="https://tailwindui.com/img/avatar-3.jpg" 
              alt="" 
            />
          </div>
          <div className='inline-block ml-5'>
            <div className='text-black pb-2'>Rafaela Silva</div>
            <div className='text-gray-400 '>Te mandou um convite!</div>
          </div>
        </div>
        <div className='mt-4'>
          <button className='rounded-md px-5 py-2 bg-blue-600 text-white'>Aceitar</button>
          <button className='ml-3 rounded-md px-5 py-2 border border-gray-200 text-black'>Negar</button>
        </div>
      </div> 
    </>
  )
}

export default Card
