import { useRecoilState } from "recoil"
import { contadorState } from "../app/contadorState"

export const useGlobalContador = () => {
    const [contador, setContador] = useRecoilState(contadorState)

    const incrementa = () => setContador((prev) => prev + 1)
    const decrementa = () => setContador((prev) => prev - 1)

    return {
        contador,
        setContador,
        incrementa,
        decrementa
    }
}
