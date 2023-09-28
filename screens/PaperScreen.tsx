import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { TextInput, Button } from "react-native-paper"
import Icon from "react-native-vector-icons/Ionicons"

const PaperScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Haz login en tu cuenta</Text>
            <TextInput
                label="Tu nombre de usuario"
                mode="outlined"
                style={styles.textInput}
            />
            <TextInput
                label="Tu contraseña"
                mode="outlined"
                secureTextEntry
                style={styles.textInput}
            />
            <Button icon="alert-rhombus" mode="contained" style={{ width: "80%" }}>
                Enviar
            </Button>
            <Icon name="wallet" color="rgb(33, 0, 93)" size={90} />
        </View>
    )
}

export default PaperScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16
        // backgroundColor: "red"
    },
    titulo: {
        fontSize: 24
    },
    tituloDark: {
        color: "#fdfdfd"
    },
    textInput: {
        backgroundColor: "#fefefe99",
        width: "80%"
    },
    container2: {
        flex: 4,
        backgroundColor: "blue"
    }
})
