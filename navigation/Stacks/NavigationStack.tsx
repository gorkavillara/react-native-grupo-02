import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createStackNavigator } from "@react-navigation/stack"
import { HabitsScreen, LoginScreen } from "../../screens"
import Camera from "../../screens/HabitsScreen/components/Camera"

type StackType = {
    Login: undefined
    Habits: undefined
    // Camera: { habitId: number }
    Camera: undefined
}

const Stack = createStackNavigator<StackType>()

const NavigationStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                component={LoginScreen}
            />
            <Stack.Screen
                name="Habits"
                options={{ headerShown: false }}
                component={HabitsScreen}
            />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Camera" component={Camera} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default NavigationStack
