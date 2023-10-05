import { NavigationContainer } from "@react-navigation/native"
import { AppContextProvider } from "./contexts"
import StoreStack from "./navigation/stacks/StoreStack"
import StoreTabs from "./navigation/tabs/StoreTabs"

export default function App() {
    return (
        <AppContextProvider>
            <NavigationContainer>
                {/* <StoreStack /> */}
                <StoreTabs />
            </NavigationContainer>
        </AppContextProvider>
    )
}
