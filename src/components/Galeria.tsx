import { useState } from "react"
import { photoList } from "../data/photoList"
import PhotoItem from "./PhotoItem"
import Modal from "./Modal";


const Galeria = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ imageOfModal, setImageOfModal ] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if(photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <h1 className='text-center text-3xl my-10'>Fotos Intergalacticas</h1> 
      <section className='container max-w-5xl mx-auto'>
          <div className="mx-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photoList.map((item) => (
              <PhotoItem 
                key={item.id}
                photo={item}
                onClick={() => openModal(item.id)}
              />
            ))}

            {showModal &&
              <Modal 
                image={imageOfModal}
                closeModal={closeModal}
              />
            }
          </div>
      </section>
    </>
  )
}

export default Galeria
