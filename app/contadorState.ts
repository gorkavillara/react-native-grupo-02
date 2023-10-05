import { atom, selector } from "recoil"

export const contadorState = atom({
    key: "contadorState",
    default: 5
})

export const segundoContadorState = atom({
    key: "segundoContadorState",
    default: 5
})

export const dobleContadorState = selector({
    key: "dobleContadorState",
    get: ({ get }) => {
        const currentValue = get(contadorState)
        return currentValue * 2
    }
})

export const sumaContadores = selector({
    key: "sumaContadores",
    get: ({ get }) => {
        const valorPrimero = get(contadorState)
        const valorSegundo = get(segundoContadorState)

        return 25
    }
})
