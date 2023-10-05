import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable
} from "react-native"
import { BlurView } from "expo-blur"
import { standardStyles } from "../styles"
import { StackNavigatorType } from "../navigation/stacks/StoreStack"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

const Home = ({
    navigation,
    route
}: NativeStackScreenProps<StackNavigatorType, "Home">) => {
    console.log({ navigation })
    console.log({ route })
    return (
        <ImageBackground
            source={require("../assets/homeBg.jpg")}
            style={standardStyles.container}
        >
            <BlurView
                intensity={25}
                style={[
                    standardStyles.container,
                    { backgroundColor: "#444a", width: "100%", gap: 16 }
                ]}
            >
                <Text style={[styles.title, styles.text]}>Home</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("Store")}
                >
                    <Text>Ir a la tienda</Text>
                </Pressable>
            </BlurView>
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
