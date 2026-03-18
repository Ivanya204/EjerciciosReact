import './App.css'
import Alert from './components/Alert'
import Buttons from './components/Buttons'
import Card from './components/Card'
import Badges from './components/Badges'
import Select from './components/Select'
import Modal from './components/Modal'
import StaticBackdrop from './components/StaticBackdrop'
import Flush from './components/Flush'
import AdditionalContent from './components/AdditionalContent'
import Diverd from './components/Diverd'
import ButtonGroup from './components/ButtonGroup'
import ListGroup from './components/ListGroup'


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
      texto={"Texto"}
      />

      <Flush 
      titulo1={"Corregir"}
      texto1={"Texto 1"}
      titulo2={"Título 2"}
      texto2={"Texto 2"}
      titulo3={"Título 3"}
      texto3={"Texto 3"}
      />

      <AdditionalContent
      titulo={"Corregir"}
      texto={"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}
      />

      <Diverd
      titulo1={"Título 1"}
      titulo2={"Título 2"}
      />

      <ButtonGroup
      btn1={"Izquierda"}
      btn2={"En medio"}
      btn3={"Derecha"}
      />

      <ListGroup
      item1={"Item 1"}
      item2={"Item 2"}
      item3={"Item 3"}
      item4={"Item 4"}
      item5={"Item 5"}
      />
    </>
  )
}

export default App
