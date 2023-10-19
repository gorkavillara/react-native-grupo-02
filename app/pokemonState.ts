import axios from "axios"
import { atom, selector } from "recoil"

// PokeApi y obtener información de pokemon
const baseUrl = "https://pokeapi.co/api/v2/pokemon"

export const pokeId = atom<string>({
    default: "1",
    key: "pokeId"
})

const wait = async () =>
    new Promise((resolve) => setTimeout(() => resolve(null), 1000))

export const pokeDetails = selector({
    key: "pokeDetails",
    get: async ({ get }) => {
        const res = await axios.get(`${baseUrl}/${get(pokeId)}`)
        await wait()
        return res.data
    }
})
