import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Pokedex from './components/pokedex/Pokedex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes >
        <Route path='/' element={< Home />} > </Route>
        <Route path='/pokedex' element={<Pokedex/>}> </Route>
     </Routes>
    </div>
  )
}

export default App
