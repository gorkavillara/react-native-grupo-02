import { Text } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Contador, Details, Home, Store } from "../../screens"
import DisplaySuma from "../../screens/Contador/components/DisplaySuma"
import PokeFinder from "../../screens/PokeFinder"

export type StackNavigatorType = {
    Home: undefined
    Store: undefined
    Details: { itemId: number }
    Contador: undefined
    PokeFinder: undefined
}

const ContadorScreen = () => (
    <>
        <Contador />
        <DisplaySuma />
    </>
)

const Stack = createNativeStackNavigator<StackNavigatorType>()
const StoreStack = () => {
    const isLoggedIn = true
    return (
        <Stack.Navigator initialRouteName="Home">
            {isLoggedIn ? (
                <>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerTitle: "Mi App", headerShown: false }}
                    />
                    <Stack.Screen
                        name="Store"
                        component={Store}
                        options={{ animation: "slide_from_bottom" }}
                    />
                    <Stack.Screen name="Details" component={Details} />
                    <Stack.Screen name="Contador" component={ContadorScreen} />
                    <Stack.Screen name="PokeFinder" component={PokeFinder} />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Login"
                        component={() => <Text>Login</Text>}
                    />
                    <Stack.Screen
                        name="Logout"
                        component={() => <Text>Logout</Text>}
                    />
                </>
            )}
        </Stack.Navigator>
    )
}

export default StoreStack
