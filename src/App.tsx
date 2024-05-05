import { useState } from 'react'
import './App.css'
import { Main_canvas } from './components/main_canvas'
//import * as THREE from 'three'

function App() {

  const [tema, setTema] = useState(true)

  return (
    <main className={`main-${tema? 'dark': 'light'}`}>
      <button className='style' onClick={()=> setTema(prev => !prev)}>logo</button>
      <Main_canvas />
    </main>
  )
}

export default App
