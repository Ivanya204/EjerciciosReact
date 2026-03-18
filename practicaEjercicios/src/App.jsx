import './App.css'
import Alert from './components/Alert'
import Buttons from './components/Buttons'
import Card from './components/Card'
import Badges from './components/Badges'
import Select from './components/Select'
import Modal from './components/Modal'
import StaticBackdrop from './components/StaticBackdrop'


function App() {

  return (
    <>
      <h1>20 Componentes de Bootstrap</h1>
      
      <Alert
      titulo ={"Esta es una alerta"}
      />
      <Buttons
      titulo ={"Este es un boton"}
      />
      <Card
      titulo ={"Esta es una tarjeta"}
      subtitulo ={"Este es el subtitulo"}
      texto = {"Este es el texto"}
      link = {"Este es el link"}
      />
      <Badges
      heading={"Este es un texto"}
      text={"Nuevo"}
      />
      <Select
      titulo={"Este es el titulo"}
      value1={"Valor1"}
      value2={"Valor2"}
      value3={"Valor3"}
      />
      <Modal
      titulo={"Este es el titulo"}
      texto={"Este es el texto"}
      boton1={"Cancelar"}
      boton2={"Aceptar"}
      />

      <StaticBackdrop
      tituloBtn={"Este es un Static Backdrop"}
      titulOffCanva={"Titulo"}
      texto={"Texto muy importante"}
      />
    </>
  )
}

export default App
