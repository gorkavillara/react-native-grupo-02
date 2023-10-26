import { NavigationContainer } from "@react-navigation/native"
import StoreStack from "./navigation/stacks/StoreStack"
import { RecoilRoot } from "recoil"
import { StatusBar } from "expo-status-bar"
import { useStatusBar } from "./hooks/useStatusBar"

// TODO: Revisar cambios de estado asíncronos

export default function App() {
    const { statusBarStyle } = useStatusBar()
    return (
        <RecoilRoot>
            <NavigationContainer>
                <StoreStack />
            </NavigationContainer>
            <StatusBar style="light" />
        </RecoilRoot>
    )
}
