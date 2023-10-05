import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    useWindowDimensions
} from "react-native"
import React from "react"
import { standardStyles } from "../styles"

const LoginScreen = () => {
    const { height, width } = useWindowDimensions()
    console.log({ height, width })

    const orientation = height >= width ? "portrait" : "landscape"
    // TODO: Solucionar problema con la imagen
    return (
        <View
            style={[
                standardStyles.container,
                {
                    gap: 16,
                    flexDirection: orientation === "portrait" ? "column" : "row"
                }
            ]}
        >
            <View style={styles.columnView}>
                <Text style={standardStyles.titulo}>Pantalla de Login</Text>
                <View style={{ borderRadius: 16, overflow: "hidden" }}>
                    <Image
                        source={require("../assets/logo_space.jpg")}
                        style={{ width: 150, height: 150 }}
                    />
                </View>
            </View>
            <View style={styles.columnView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nombre de usuario"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Contraseña"
                    secureTextEntry
                />
                <Pressable style={styles.buttonLogin}>
                    <Text style={styles.textButton}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    columnView: {
        gap: 16
    },
    textInput: {
        width: 250,
        borderWidth: 1,
        padding: 16,
        borderRadius: 8
    },
    buttonLogin: {
        width: 250,
        backgroundColor: "#adff77",
        padding: 16,
        borderRadius: 8
    },
    textButton: {
        textAlign: "center",
        fontSize: 16
    }
})
