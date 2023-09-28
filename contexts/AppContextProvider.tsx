import React, {
    createContext,
    useState,
    PropsWithChildren,
    useReducer
} from "react"
import {
    ContadorAction,
    ContadorActionType,
    contadorReductor
} from "./reducers/contadorReducer"
import { useColorScheme } from "react-native"

interface IAppContext {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    contador: number
    dispatchContador: React.Dispatch<ContadorAction>
    toggleDarkMode: () => void
}

export const AppContext = createContext<IAppContext>(null!)

const AppContextProvider = ({ children }: PropsWithChildren) => {
    const colorScheme = useColorScheme()
    // console.log(colorScheme)
    const [darkMode, setDarkMode] = useState(colorScheme === "dark")
    const [contador, dispatchContador] = useReducer(contadorReductor, 3)
    // const [contador, setContador] = useState(0)

    // const incrementa = () => setContador(prev => prev + 1)
    // const doble = () => setContador(prev => prev * 2)
    // const reset = () => setContador(0)
    // const incrementa = () =>
    //     setContador((prev) => contadorReductor(prev, { type: "sumaUno" }))

    // const incrementa = () => dispatchContador({ type: "cualquiercosa" })
    const toggleDarkMode = () => setDarkMode((prev) => !prev)

    return (
        <AppContext.Provider
            value={{ darkMode, setDarkMode, contador, dispatchContador, toggleDarkMode }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
