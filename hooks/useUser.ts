import { useRecoilState } from "recoil"
import { userAtom } from "../app/userState"

export const useUser = () => {
    const [user, setUser] = useRecoilState(userAtom)

    const login = (
        username: string,
        password: string
    ): { success: boolean } => {
        // Setear el valor de user
        // Chequeamos con BBDD etc etc
        if (password.length < 3) return { success: false }
        
        setUser({
            id: 1,
            username
        })

        return { success: true }
    }

    return { user, login }
}
