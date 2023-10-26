import {
    StyleSheet,
    Text,
    Pressable,
    ImageBackground,
    TextInput,
    View,
    Alert
} from "react-native"
import React, { useEffect, useState } from "react"
import { standardStyles } from "../../styles"
import { setStatusBarStyle } from "expo-status-bar"
import { useUser } from "../../hooks/useUser"
import { useNavigation } from "@react-navigation/native"

const LoginScreen = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { login } = useUser()

    const navigation = useNavigation()

    useEffect(() => {
        setStatusBarStyle("light")
    }, [])

    const hazLogin = () => {
        const { success } = login(username, password)
        if (!success)
            return Alert.alert(
                "Contraseña errónea",
                "Por favor, introduce unas credenciales correctas"
            )

        console.log("Todo OK - Redireccionar")
        // @ts-ignore
        navigation.navigate("Habits")

    }
    return (
        <ImageBackground
            source={require("../../assets/bg.png")}
            style={standardStyles.container}
        >
            <View style={[standardStyles.container, { width: "100%" }]}>
                <Text style={styles.title}>Haz Log In</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Tu nombre de usuario"
                    placeholderTextColor="#fff8"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Tu contraseña"
                    placeholderTextColor="#fff8"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Pressable style={styles.button} onPress={hazLogin}>
                    <Text>Aceptar</Text>
                </Pressable>
            </View>
            <View>
                <Text style={{ color: "white", fontWeight: "200" }}>
                    Created with ❤️ in dos horas
                </Text>
            </View>
        </ImageBackground>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 28
    },
    textInput: {
        color: "white",
        width: "80%",
        borderWidth: 0.8,
        borderColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8
    },
    button: {
        width: "80%",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "white"
    }
})
