import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput
} from "react-native"
import React, { useState } from "react"
import { standardStyles } from "../styles"
import { StatusBar } from "expo-status-bar"
import CustomInput from "../components/Forms/CustomInput"
import SubmitButton from "../components/Forms/SubmitButton"
import { useUser } from "../hooks/useUser"

const LogIn = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { login, isLoading } = useUser()

    return (
        <ImageBackground
            style={standardStyles.container}
            source={require("../assets/blurredLogin.jpg")}
        >
            <View style={styles.background}>
                <Text style={styles.title}>Haz Log In</Text>
                <CustomInput
                    placeholder="Tu nombre de usuario"
                    editable={!isLoading}
                    value={username}
                    onChangeText={setUsername}
                />
                <CustomInput
                    placeholder="Tu contraseña"
                    secureTextEntry
                    editable={!isLoading}
                    value={password}
                    onChangeText={setPassword}
                />
                <SubmitButton
                    text="Aceptar"
                    isLoading={isLoading}
                    onPress={() => login(username, password)}
                />
            </View>
            <StatusBar style="light" />
        </ImageBackground>
    )
}

export default LogIn

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#0007",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 16
    },
    title: {
        fontSize: 32,
        color: "white"
    },
    textInput: {}
})
