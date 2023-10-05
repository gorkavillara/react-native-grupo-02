import { NavigationContainer } from "@react-navigation/native"
import { AppContextProvider } from "./contexts"
import StoreStack from "./navigation/stacks/StoreStack"

export default function App() {
    return (
        <AppContextProvider>
            <NavigationContainer>
                <StoreStack />
            </NavigationContainer>
        </AppContextProvider>
    )
}
