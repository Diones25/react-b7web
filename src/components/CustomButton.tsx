
type Props = {
  label: string;
  onClick: () => void
}

const CustomButton = ({ label, onClick }: Props) => {
  return (
    <>
     <button onClick={onClick} className="p-3 text-white bg-blue-500 rounded-md">{ label }</button> 
    </>
  )
}

export default CustomButton
