import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HabitsScreen, LoginScreen } from "../../screens"

type StackType = {
    Login: undefined
    Habits: undefined
}

const Stack = createNativeStackNavigator<StackType>()

const NavigationStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="Habits" options={{ headerShown: false }} component={HabitsScreen} />
        </Stack.Navigator>
    )
}

export default NavigationStack
