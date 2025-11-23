import { useState } from 'react'
import './App.css'
import {Intro} from './screens/intro'
import {Sobre_mi } from './screens/sobre_mi'
import { Hago } from './screens/hago'
import { Blandas_educacion } from './screens/blandas-educacion'
import { Proyectos } from './screens/proyectos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro/>
      <Sobre_mi/>
      <Hago/>
      <Blandas_educacion/>
      <Proyectos/>

    </>
  )
}

export default App
