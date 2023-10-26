import { StatusBar } from "expo-status-bar"
import NavigationStack from "./navigation/Stacks/NavigationStack"
import { NavigationContainer } from "@react-navigation/native"
import { RecoilRoot } from "recoil"

export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <NavigationStack />
            </NavigationContainer>
        </RecoilRoot>
    )
}
