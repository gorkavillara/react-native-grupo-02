import { useState } from "react"

// export const useLista = () => {
export function useLista<T = unknown>(listaInicial: T[] = []) {
    const [lista, setLista] = useState<T[]>(listaInicial)
    const nuevoElemento = (elemento: T) => {
        setLista((prevLista) => [...prevLista, elemento])
    }
    const completaElemento = (id: number) => {
        // TODO: Terminar en casa
    }

    return { lista, setLista, nuevoElemento, completaElemento }
    // return [ lista, setLista, nuevoElemento, completaElemento ]
}
