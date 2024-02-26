
// function customRender(reactElement , cantainer){

//     const domElement = document.createElement(reactElement.type)  // create a "anchor Tag" refrence to the reactElement.
//     domElement.innerHTML = reactElement.children

//     domElement.setAttribute('href' , reactElement.props.href)
//     domElement.setAttribute('target' , reactElement.props.target)

//     cantainer.appendChild(domElement)
// }


// This is a second way to create a domElement by using for(in loop).

function customRender( reactElement  , cantainer){
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === "children") continue
         domElement.setAttribute(prop , reactElement.props[prop])
                                //ko set , kaha sai
    }         
    cantainer.appendChild(domElement)                 
}



const reactElement = {

    type : 'a',
    props : {
        href : 'https://google.com',
        target : "_blank"
    },
    children : 'Click me to visit google'

}

// html kai id_root ko catch kiya hai.
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer )
             //sai       ,//pai   