import { atom } from "recoil"

interface User {
    id: number
    username: string
}

export const userAtom = atom<User | null>({
    key: "user",
    default: null
})