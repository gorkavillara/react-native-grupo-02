import "react-native-gesture-handler"

import { NavigationContainer } from "@react-navigation/native"
import { AppContextProvider } from "./contexts"
import StoreStack from "./navigation/stacks/StoreStack"
import StoreTabs from "./navigation/tabs/StoreTabs"
import StoreDrawer from "./navigation/drawer/StoreDrawer"

export default function App() {
    return (
        <AppContextProvider>
            <NavigationContainer>
                {/* <StoreStack /> */}
                {/* <StoreTabs /> */}
                <StoreDrawer />
            </NavigationContainer>
        </AppContextProvider>
    )
}
