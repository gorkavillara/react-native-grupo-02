import { Text } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Contador, Details, Home, Store } from "../../screens"
import DisplaySuma from "../../screens/Contador/components/DisplaySuma"
import PokeFinder from "../../screens/PokeFinder"
import LogIn from "../../screens/LogIn"
import { useUser } from "../../hooks/useUser"

export type StackNavigatorLoggedInType = {
    Home: undefined
    Store: undefined
    Details: { itemId: number }
    Contador: undefined
    PokeFinder: undefined
}
export type StackNavigatorLoggedOutType = {
    Login: undefined
}

const ContadorScreen = () => (
    <>
        <Contador />
        <DisplaySuma />
    </>
)

const StackLoggedIn = createNativeStackNavigator<StackNavigatorLoggedInType>()
const StackLoggedOut = createNativeStackNavigator<StackNavigatorLoggedOutType>()

const StoreStack = () => {
    // const isLoggedIn = false
    const { isLoggedIn, isLoggedInRecoil } = useUser()
    return isLoggedIn ? (
        <StackLoggedIn.Navigator initialRouteName="Home">
            <StackLoggedIn.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: "Mi App", headerShown: false }}
            />
            <StackLoggedIn.Screen
                name="Store"
                component={Store}
                options={{ animation: "slide_from_bottom" }}
            />
            <StackLoggedIn.Screen name="Details" component={Details} />
            <StackLoggedIn.Screen name="Contador" component={ContadorScreen} />
            <StackLoggedIn.Screen name="PokeFinder" component={PokeFinder} />
        </StackLoggedIn.Navigator>
    ) : (
        <StackLoggedOut.Navigator initialRouteName="Login">
            <StackLoggedOut.Screen
                name="Login"
                options={{ headerShown: false }}
                component={LogIn}
            />
        </StackLoggedOut.Navigator>
    )
}

export default StoreStack
