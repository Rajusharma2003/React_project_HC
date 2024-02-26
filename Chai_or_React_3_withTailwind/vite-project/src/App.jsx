import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1 className='bg-green-400 mb-20'>TailwindCss Test.com</h1>
 
     {/* use the imported card */}
     <Card  username='chai-With-raj' btnText='raj'/>
     <Card  username='chai-With-raju' btnText='raju' />
     <Card/>
     <Card/>

    </>  
  )
}

export default App
