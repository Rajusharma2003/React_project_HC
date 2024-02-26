import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function App() {

  return (
    <>
     <h1>hello mahesh</h1>
    </>
  )
}

// This is a custom way to define the react element.
// In this case this is not a correct way to made a reactElemet there is a some flow to use this.
// const reactElement = {

//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : "_blank"
//   },
//   children : 'Click me to visit google'

// }


// This is a correct way to define the reactElement.
// const anotherElement  = (
//   <a href='https://google.com' target='_blank'> Google.com</a>
// )


// print the variable name.
// const anotherUser = "chai or react"


// "the real implement of react."
// const reactElement = React.createElement(

//   'a',
//   { href:'https://google.com' , target : '_blank'},
//   'Click me to visit google',
//   anotherUser // at last excute all the variable.
// )







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/*App() */}  {/* This is also a way to excute the App funtion bec we can also call the funtion link (APP())  */}
    {/* anotherElement */}
  </React.StrictMode>,
)
