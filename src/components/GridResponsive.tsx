

const GridResponsive = () => {
  return (
    <>
      <div className='p-3 rounded-md bg-gray-400'>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
          <div className='w-full h-60 bg-cover bg-center md:col-span-2 md:row-span-2 md:h-full bg-[url(https://casacor.abril.com.br/wp-content/uploads/sites/7/2023/03/casa-praia-ares-pousada-litoral-paulista-studio-a-g-credito-monica-assam-piscina17.jpg?quality=90&strip=info&w=1024&crop=1)]'></div>
          <div className='w-full h-60 bg-cover bg-center bg-[url(https://casacor.abril.com.br/wp-content/uploads/sites/7/2023/03/casa-praia-ares-pousada-litoral-paulista-studio-a-g-credito-monica-assam-sala-13.jpg?quality=90&strip=info&w=1024&crop=1)]'></div>
          <div className='w-full h-60 bg-cover bg-center bg-[url(https://casacor.abril.com.br/wp-content/uploads/sites/7/2023/03/casa-praia-ares-pousada-litoral-paulista-studio-a-g-credito-monica-assam-sala-jantar-11.jpg?quality=90&strip=info&w=1024&crop=1)]'></div>
        </div>
        <div className='text-2xl font-bold mt-3'>Título da casa</div>
        <div className='flex gap-2 mt-3'>
          <div className='rounded-full px-3 py-1 text-sm bg-green-700 text-white'>Campo</div>
          <div className='rounded-full px-3 py-1 text-sm bg-green-700 text-white'>Moderna</div>
          <div className='rounded-full px-3 py-1 text-sm bg-green-700 text-white'>Piscina</div>
        </div>
      </div> 
    </>
  )
}

export default GridResponsive
