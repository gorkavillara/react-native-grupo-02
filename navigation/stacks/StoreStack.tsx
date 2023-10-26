import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
    CameraScreen,
    Contador,
    Details,
    Home,
    Store,
    MapsScreen,
    NotificationsScreen,
    ContactsScreen
} from "../../screens"
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
    CameraScreen: undefined
    MapsScreen: undefined
    NotificationsScreen: undefined
    ContactsScreen: undefined
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
            <StackLoggedIn.Screen
                options={{ headerShown: false }}
                name="CameraScreen"
                component={CameraScreen}
            />
            <StackLoggedIn.Screen
                options={{ headerShown: false, animation: "fade_from_bottom" }}
                name="MapsScreen"
                component={MapsScreen}
            />
            <StackLoggedIn.Screen
                options={{ animation: "fade_from_bottom" }}
                name="NotificationsScreen"
                component={NotificationsScreen}
            />
            <StackLoggedIn.Screen
                options={{ animation: "fade_from_bottom" }}
                name="ContactsScreen"
                component={ContactsScreen}
            />
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
