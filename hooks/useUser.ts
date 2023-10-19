import { useMemo, useState } from "react"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { isLoggedInSelector, userAtom } from "../app/userState"

const wait = async () =>
    new Promise((resolve) => setTimeout(() => resolve(null), 1000))

export const useUser = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useRecoilState(userAtom)
    const resetUser = useResetRecoilState(userAtom)
    const isLoggedInRecoil = useRecoilValue(isLoggedInSelector)

    const isLoggedIn = useMemo(() => (user === null ? false : true), [user])

    const login = async (username: string, password: string) => {
        setIsLoading(true)
        // 1 - Chequear el usuario y la contraseña - En BBDD (simulamos 1s)
        await wait()
        setUser({
            id: 1,
            username,
            role: "Admin"
        })
        // 2 - Setear la info del usuario
        setIsLoading(false)
    }

    const logout = resetUser

    return { user, isLoggedIn, isLoggedInRecoil, login, isLoading, logout }
}
