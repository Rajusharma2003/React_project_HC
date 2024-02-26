import { useEffect , useState} from 'react'


// create a custom hook.

function useCurrencyInfo(currency) {

    const [data , setData] = useState({});

    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/
        latest/currencies/${currency}.json`)
        
        .then( (res) => res.json)
        .then ( (res) => setData(res[currency]))
 
    console.log(data);
    } , [currency]) // dependences

    console.log(data);
    return  data

}

export default useCurrencyInfo