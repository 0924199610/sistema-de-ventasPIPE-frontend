import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function conversor() {
  const [ textoavoz,settextoavoz] = useState('')
  const [ vozatexto,setvozatexto] = useState('')
 
function cambiartexto(evento) {
  settextoavoz(evento.target.value)
  }

  function convertirtextoavoz(){
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoavoz)
    synth.speak(utterThis)
  }
  function resultado(event) {
    setvozatexto(event.results[0][0].transcript)
  }
  function grabarvozatexto(){
const recognition= new window.webkitSpeechRecognition()
recognition.lang= 'es-ES'
recognition. start()
recognition.onresult= resultado
  }

return (
  <>
  <h1>conversor TTS y STT</h1>
  <br/>
 <h3>conversor de texto a voz</h3>
 <input type="text" id="textoavoz" value={textoavoz} onChange={cambiartexto}/>
 <button onClick={convertirtextoavoz}>convertir</button>

 <h3>conversor de voz a texto </h3>
 <button onClick={grabarvozatexto}>grabar</button>
 {vozatexto}
  </>
 )

}

export default conversor
