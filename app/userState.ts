import { atom, selector } from "recoil"

export interface User {
    id: number
    username: string
    role: "Admin" | "Customer"
}

export const userAtom = atom<null | User>({
    key: "user",
    default: null
    // default: { id: 1, username: "Gorka", role: "Customer" }
})

export const isLoggedInSelector = selector<boolean>({
    key: "isLoggedIn",
    get: ({ get }) => {
        const currentUser = get(userAtom)
        return currentUser === null ? false : true
    }
})