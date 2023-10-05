import { View, Text } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Details, Home, Store } from "../../screens"
import React from "react"

export type StackNavigatorType = {
    Home: undefined
    Store: undefined
    Details: { itemId: number }
}

const Stack = createNativeStackNavigator<StackNavigatorType>()
const StoreStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
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
        </Stack.Navigator>
    )
}

export default StoreStack
