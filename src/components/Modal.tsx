type Props = {
  image: string;
  closeModal: () => void;
}

const Modal = ({ image, closeModal }: Props) => {
  return (
    <>
      <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
        <img src={`/img/${image}`} alt="" className="max-w-screen max-h-screen"/>
      </div>
      <div onClick={closeModal} className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-right text-5xl">
        X
      </div>
    </>
  )
}

export default Modal
