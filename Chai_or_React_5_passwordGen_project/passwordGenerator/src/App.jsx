import { useState , useCallback , useEffect , useRef } from 'react'
import './App.css'

function App() {
  
  const [length , setLength] = useState(8)  // Track the length. 
  const [allowedNumber , setNumber] = useState(false)  // Track the number. 
  const [allowedCharacter , setCharacter] = useState(false)  // Track the character.
  const [password , setPassword] = useState()  // Track the setPassword.

  const [message , setMessage] = useState('') // Track the message.


// useRef hook.
const passwordRef = useRef(null)  // inition value is null.

const copyPasswordToClipBoard = useCallback( ()=> {
// useRef use here.
passwordRef.current?.select()  //copy button pai click hone per (password) automatic select ho jata hai.
// passwordRef.current?.setSelectionRange(0 , 9)

   window.navigator.clipboard.writeText(password)
  //  add by me.
   setMessage('password copy to ciplboard successfully')

  //  Add by me.
  const timeOut =  setTimeout(() => {
    setMessage('')
   }, 3000);
return () => clearTimeout(timeOut);
} , [password])

// Create a function to {GeneratePassword}.
// And use the "useCallback Hook" to track the method like => num,char,length,passowrd 
// useCallback( fun, [])  ===> syntex.
const GeneratePassword = useCallback(() => {

  let pass = ''
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  // set condition to check numb and char is allowed.
  // if number is allowed.
  if(allowedNumber) str += '0123456789'
  // if string is allowed.
  if(allowedCharacter) str += "!~`@#$%^&*()=+_-{}[]|,./"

  for (let i = 1; i <= length; i++) {
      let char = Math.floor( Math.random() * str.length + 1)

      pass += str.charAt(char)
  }
  setPassword(pass)
  // add by me.
  setMessage('password created successfully !')
// add by me.
  const timeOut = setTimeout( () => {
    setMessage('')
  }, 3000)
return () => clearTimeout(timeOut)


} , [length , allowedNumber , allowedCharacter , setPassword  ])  // these all the dependences.


  // use "useEffect" mai kisi type kai change ko track kiya jata  hai.
useEffect( () => {
    GeneratePassword()
    // add by me. 
  // setMessage('')  yai code generatePassword kai setTimeout ko overwrite kar rha tha iss code
                    // sai dependences mai kisi bhi change hone per "copy password successfully ko disable kar raha the"

  } , [ length , allowedNumber , allowedCharacter, GeneratePassword ])  // dependences

  return (
    <>

    {/* create a space */}
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-10 my-8 text-orange-500 bg-gray-700'>

      <h1 className=' text-white text-center my-4 text-3xl'> password Generator</h1>
      
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input 
          type="text"
          placeholder='password'
          value={password}
          readOnly
          className='outline-none w-full py-1 px-3'
          ref={passwordRef}
          />

          <button onClick={copyPasswordToClipBoard}   
          className='outline-none bg-blue-600 text-white px-3 py-o.5 shrink-0'>
            Copy
          </button>
        </div>


{/*create a lable and range key */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input 
            type="range" 
            min={6}
            max={23}
            value={length}
                                        // This 'onChange' event responsable to change the value of the length.
            className='cursor-pointer ' onChange={ (e) => { setLength(e.target.value)}}
            />                          
            {/* <label> </label> */}  
            <div>length : {length}</div> 
              {/* isse label mai bhi use kar skte the. */}
          </div>
 
          {/* This is a number Checkbox field  */}
          <div className=' flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={allowedNumber}
            id='numberInput'
            onChange={ () => { setNumber( (prev) => !prev)}}
             />

          <label htmlFor="numberInput">Number</label>
          </div>

        {/* This is a character field */}
        <div className='flex text-center gap-x-1'>

          <input 
          type="checkbox" 
          defaultChecked={allowedCharacter}
          id='characterInput'
          onChange={ () => {setCharacter((prev) => !prev) }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
        </div>

         {/* add by me */}
        {message && <p className=' text-green-500'> {message}</p>}
      </div>

    </>
  )
}

export default App
