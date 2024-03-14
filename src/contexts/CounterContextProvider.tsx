import { createContext } from "react";
import { useState } from "react";

export const CounterContext = createContext({} as any);

const CounterContextProvider = ({children} : any) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <CounterContext.Provider value={{count, setCount}}>{children}</CounterContext.Provider>
        </>
    )
}

export default CounterContextProvider