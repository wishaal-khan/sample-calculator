import { useState } from 'react'
import './App.scss'
import Calculator from './components/calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Calculator />
    </div>
  )
}

export default App
