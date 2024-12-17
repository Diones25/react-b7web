import CustomButton from './CustomButton'


export const EventoViaProps = () => {

  const handleButton1 = () => {
    alert('clicou no botão 1')
  }

  const handleButton2 = () => {
    alert('clicou no botão 2')
  }
  
  const handleButton3 = () => {
    alert('clicou no botão 3')
  }

  return (
    <>
      <CustomButton label='Clique aqui 1' onClick={handleButton1}/>
      <CustomButton label='Clique aqui 2' onClick={handleButton2}/>
      <CustomButton label='Clique aqui 3' onClick={handleButton3}/>
    </>
  )
}

