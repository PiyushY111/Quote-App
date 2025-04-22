export const fetchQuote = async () =>{
    const responces = await fetch('https://dummyjson.com/quotes/random')
    const data = await responces.json()
    return data
}
