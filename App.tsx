import { StyleSheet, ImageBackground, View, Button } from "react-native"
import { StatusBar } from "expo-status-bar"
import Constants from "expo-constants"
import {
    MiComponente,
    FormularioRegistro,
    Contador,
    PokemonFetch
} from "./screens"
import AppContextProvider from "./contexts/AppContextProvider"
import ContadorDeContexto from "./screens/ContadorDeContexto"
import ListaTareasConHook from "./screens/ListaTareasConHook"
import PokemonConHook from "./screens/PokemonConHook"
// @ts-ignore
// import bgImage from "./assets/bgImage.png"

export default function App() {
    return (
        <AppContextProvider>
            <ImageBackground
                style={styles.bgImage}
                source={require("./assets/bgImage.png")}
            >
                <View style={styles.container}>
                    {/* <ListaTareasConHook /> */}
                    <PokemonConHook />
                    {/* <ContadorDeContexto /> */}
                    {/* <Contador /> */}
                    {/* {muestraPokemon && <PokemonFetch />} */}
                    {/* <Button title="Muestra Pokemon" onPress={() => setMuestraPokemon(prev => !prev)} /> */}
                    <StatusBar style="auto" />
                </View>
            </ImageBackground>
        </AppContextProvider>
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
    texto: { fontSize: 32, marginVertical: 16 }
})
