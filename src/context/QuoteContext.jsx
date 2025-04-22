import { createContext, useReducer } from "react";
import { QuoteReducer } from "./QuoteReducewr";

const QuoteContext = createContext()


export const QuoteProvider = ({ children }) => {

    const initialstate = {
        quoteData: {
            id: 62,
            quote: "If you want to lift yourself up, lift up someone else.",
            author: "Booker T. Washington"    
        }
    }
     const [state, dispatch] = useReducer(QuoteReducer, initialstate)

    

    return (
        <QuoteContext.Provider value={{ ...state, dispatch }}>
            {children}
        </QuoteContext.Provider>
    )
}


export default QuoteContext