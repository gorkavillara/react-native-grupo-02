import { NavigationContainer } from "@react-navigation/native"
import StoreStack from "./navigation/stacks/StoreStack"
import { RecoilRoot } from "recoil"

// TODO: Revisar cambios de estado asíncronos

export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <StoreStack />
            </NavigationContainer>
        </RecoilRoot>
    )
}
