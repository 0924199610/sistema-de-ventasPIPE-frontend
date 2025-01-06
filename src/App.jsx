import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './conversor'

function App() {
  const [cliente, setcliente] = useState('')
  const [identificacion, setidentificacion] = useState('')
  const [ logueado,setLogueado] = useState(false)
  
  function cambiarcliente(evento){
    setcliente(evento.target.value)
  }

function cambiaridentificacion(evento) {
setidentificacion(evento.target.value)
}

function buscar() {
if (cliente == 'jose' && identificacion == '1116'){
alert('encontrado')
setLogueado(true)
}else{
  alert('cliente o identificacion incorrectos')
}
}

if (logueado){
 return <Conversor/>
}

  return (
    <>
    <h1>buscar cliente </h1>
   <input  placeholder='nombre' type="text" name="cliente" id="cliente" value={cliente} onChange={cambiarcliente} />
   <input placeholder='identificacion' type="text" name="identificacion" id="identificacion"value={identificacion} onChange={cambiaridentificacion} />
   <button onClick={buscar}>buscar</button>
 

    </>
  )
}

export default App
