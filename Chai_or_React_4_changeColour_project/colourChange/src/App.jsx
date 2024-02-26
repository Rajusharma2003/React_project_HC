import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState('olive')

  return (
    
    <div className='w-full h-screen duration-200' style={{backgroundColor : colour}}>

    {/* The bottem button stripes */}

    <div className='fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
    
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>

      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
      onClick={ () => setColour('red')}
      style={ {backgroundColor : 'red'}}>
        Red
      </button>

      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
       onClick={ () => setColour('Green')}
      style={ {backgroundColor : 'Green'}}>
        Green
      </button>

      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
      onClick={ () => setColour('Blue')}
      style={ {backgroundColor : 'Blue'}}>
        Blue
      </button>

      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
      onClick={ () => setColour('Black')}
      style={ {backgroundColor : 'Black'}}>
        Black
      </button>

      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
      onClick={ () => setColour('Gray')}
      style={ {backgroundColor : 'Gray'}}>
        Gray
      </button>

      <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
      onClick={ () => setColour('Yellow')}
      style={ {backgroundColor : 'Yellow'}}>
        Yellow
      </button>

      <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
      onClick={ () => setColour('Pink')}
      style={ {backgroundColor : 'pink'}}>
        pink
      </button>

      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
      onClick={ () => setColour('purple')}
      style={ {backgroundColor : 'purple'}}>
        purple
      </button>

      <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
      onClick={ () => setColour('lavender')}
      style={ {backgroundColor : 'lavender'}}>
        lavender
      </button>

      <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
      onClick={ () => setColour('White')}
      style={ {backgroundColor : 'white'}}>
        white
      </button>

      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
      onClick={ () => setColour('brown')}
      style={ {backgroundColor : 'brown'}}>
        brown
      </button>
    </div>
     </div>

    </div>
  )
}

export default App
