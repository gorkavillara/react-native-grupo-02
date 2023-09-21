import React, { createContext, useState, PropsWithChildren } from "react"

interface IAppContext {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

function contadorReductor(
    estado: number,
    accion: { type: string; payload: any }
) {
    if (accion.type === "devuelveElDoble") return estado * 2
    if (accion.type === "sumaUno") return estado + 1

    return estado
}

export const AppContext = createContext<IAppContext>(null!)

const AppContextProvider = ({ children }: PropsWithChildren) => {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
