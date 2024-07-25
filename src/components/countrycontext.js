import { createContext, useState , useContext } from "react";
const CountryContext = createContext()


export function useCountry() {
    return useContext(CountryContext);
}

export default function ContextProvider({ children }) {
    const [country, setcountry] = useState("")

    return (
        <CountryContext.Provider value={{ country, setcountry }}>
            {children}
        </CountryContext.Provider>
    )
};


