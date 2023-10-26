import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable
} from "react-native"
import { standardStyles } from "../styles"
import { StackNavigatorLoggedInType } from "../navigation/stacks/StoreStack"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useUser } from "../hooks/useUser"

const Home = ({
    navigation,
    route
}: NativeStackScreenProps<StackNavigatorLoggedInType, "Home">) => {
    console.log({ navigation })
    console.log({ route })
    const { logout } = useUser()
    return (
        <ImageBackground
            source={require("../assets/homeBg.jpg")}
            style={standardStyles.container}
        >
            <View
                // intensity={25}
                style={[
                    standardStyles.container,
                    { backgroundColor: "#444a", width: "100%", gap: 16 }
                ]}
            >
                <Text style={[styles.title, styles.text]}>Home</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("CameraScreen")}
                >
                    <Text>Ir a cámara</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("MapsScreen")}
                >
                    <Text>Ir a mapas</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("NotificationsScreen")}
                >
                    <Text>Ir a Notificaciones</Text>
                </Pressable>
                {/* <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("Store")}
                >
                    <Text>Ir a la tienda</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("Contador")}
                >
                    <Text>Ir al contador</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("PokeFinder")}
                >
                    <Text>Ir al PokeFinder</Text>
                </Pressable>
                <Pressable onPress={logout}>
                    <Text style={{ color: "white" }}>Logout</Text>
                </Pressable> */}
            </View>
        </ImageBackground>
    )
}

export default Home

const styles = StyleSheet.create({
    text: {
        color: "white"
    },
    title: {
        fontSize: 24
    },
    button: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: "white",
        borderRadius: 32
    }
})
