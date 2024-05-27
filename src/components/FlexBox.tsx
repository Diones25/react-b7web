

const FlexBox = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='flex gap-3 flex-col sm:flex-row'>
          <div className='flex-1 rounded-md bg-blue-500 p-4'>01</div>
          <div className='flex-1 rounded-md bg-blue-500 p-4'>02</div>
          <div className='flex-1 rounded-md bg-blue-500 p-4'>03</div>
          <div className='flex-1 rounded-md bg-blue-500 p-4'>04</div>
        </div>
      </div> 
    </>
  )
}

export default FlexBox
