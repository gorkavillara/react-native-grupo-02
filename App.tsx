import { StyleSheet, ImageBackground, ScrollView } from "react-native"
import { StatusBar } from "expo-status-bar"
import Constants from "expo-constants"
import { MiComponente, FormularioRegistro } from "./screens"
// @ts-ignore
// import bgImage from "./assets/bgImage.png"

export default function App() {
    return (
        <ImageBackground style={styles.bgImage} source={require("./assets/bgImage.png")}>
            <ScrollView style={styles.container}>
                <FormularioRegistro />
                <StatusBar style="auto" />
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    container: {
        flex: 1,
        padding: 8
    },
    texto: { fontSize: 32, marginVertical: 16 },
})
