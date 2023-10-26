import NavigationStack from "./navigation/Stacks/NavigationStack"
import { NavigationContainer } from "@react-navigation/native"
import { RecoilRoot } from "recoil"
import { useNotification } from "./hooks/useNotification"
import { useEffect } from "react"

export default function App() {
    const { setNotificationListener } = useNotification()
    useEffect(() => {
        setNotificationListener()
    }, [])
    return (
        <RecoilRoot>
            <NavigationContainer>
                <NavigationStack />
            </NavigationContainer>
        </RecoilRoot>
    )
}
