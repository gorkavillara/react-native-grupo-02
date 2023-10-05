import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Details, Home, Store } from "../../screens"
import Icon from "react-native-vector-icons/Ionicons"
import React from "react"

export type StackNavigatorType = {
    Home: undefined
    Store: undefined
    Details: { itemId: number }
}

const Tab = createBottomTabNavigator<StackNavigatorType>()
const StoreTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: "Mi App",
                    headerShown: false,
                    tabBarBadge: 25,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name={focused ? "home" : "home-outline"}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Store"
                component={Store}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name={focused ? "cart" : "cart-outline"}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            {/* <Tab.Screen name="Details" component={Details} /> */}
        </Tab.Navigator>
    )
}

export default StoreTabs
