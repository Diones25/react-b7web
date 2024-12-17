

const Grid = () => {
  return (
    <>
     <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 m-3'>
          <div className='rounded-md bg-blue-500 p-4'>01</div>
          <div className='rounded-md bg-blue-500 p-4'>02</div>
          <div className='rounded-md bg-blue-500 p-4'>03</div>
          <div className='rounded-md bg-blue-500 p-4'>04</div>
          <div className='rounded-md bg-blue-500 p-4'>05</div>
          <div className='rounded-md bg-blue-500 p-4'>06</div>
          <div className='col-span-full rounded-md bg-blue-500 p-4'>07</div>
          <div className='col-span-2 rounded-md bg-blue-500 p-4'>08</div>
          <div className='rounded-md bg-blue-500 p-4'>09</div>
        </div>
      </div>  
    </>
  )
}

export default Grid
