import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(5)
  // let counter = 5  // kuy ki useState mai define hai.


  const setCount =  () => {
    console.log('log value is ' , counter);
    //  counter +=1
     

    if(counter >= 20){
      console.log('The value is not more than 20');
    }

    else{
      counter = counter+1
      setCounter(counter)
    console.log('log value is ' , counter);
  
    }

  }


  function removeCount() {

    if(counter > 0){
      setCounter(counter -=1)

    }
    else{
      console.log("negative value is not accetable");
    }
    console.log("remove value is " , counter);
  }
  return (
    <>
     <h1>chai or React</h1>
     <h2>counted value is {counter}</h2>

     <button onClick={setCount}>Add value {counter}</button>
     <button onClick={removeCount}>remove value {counter}</button>


{/* Check the condition if value is less than "0" Than so some error */}
    {counter <=0 && (
     <p style={{color : 'red'}}> Error : negative value is not accetable </p>
    )}

 
{/* Check the condition if value is more than "20" Than so some error */}
    {counter >=20 && (
      <p style={{ color : 'red'}}> Error : the maximun value the more than twenty</p>
    )}
     <p>footer {counter}</p>
     
    </>
  )
}

export default App
