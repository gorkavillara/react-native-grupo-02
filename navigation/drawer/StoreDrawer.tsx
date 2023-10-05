import { createDrawerNavigator } from "@react-navigation/drawer"
import { Details, Home, Store } from "../../screens"
import Icon from "react-native-vector-icons/Ionicons"
import React from "react"

export type StackNavigatorType = {
    Home: undefined
    Store: undefined
    Details: { itemId: number }
}

const Drawer = createDrawerNavigator<StackNavigatorType>()
const StoreDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: "Mi App",
                    drawerActiveBackgroundColor: "#f04",
                    drawerActiveTintColor: "#fff"
                }}
            />
            <Drawer.Screen name="Store" component={Store} />
            {/* <Drawer.Screen name="Details" component={Details} /> */}
        </Drawer.Navigator>
    )
}

export default StoreDrawer
