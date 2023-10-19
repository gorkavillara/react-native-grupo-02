import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    Pressable,
    ActivityIndicator
} from "react-native"
import React from "react"
import { standardStyles } from "../styles"
import {
    pokeId as pokeIdAtom,
    pokeDetails as pokeDetailsState
} from "../app/pokemonState"
import {
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
    useRecoilValueLoadable
} from "recoil"

const PokeFinder = () => {
    // const pokeId = useRecoilValue(pokeIdAtom)
    // const setPokeId = useSetRecoilState(pokeIdAtom)
    const [pokeId, setPokeId] = useRecoilState(pokeIdAtom)

    const pokeDetails = useRecoilValueLoadable(pokeDetailsState)
    console.log(pokeDetails.contents.message)
    return (
        <ImageBackground
            source={require("../assets/pokeBg.jpg")}
            style={standardStyles.container}
        >
            <View style={[standardStyles.container, styles.imgBg]}>
                <Text style={styles.title}>PokeFinder</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Introduce el ID"
                    value={pokeId}
                    onChangeText={setPokeId}
                />
                {/* <Pressable style={styles.button} onPress={() => null}>
                    <Text>Buscar</Text>
                </Pressable> */}
                {pokeDetails.state === "hasError" && (
                    <Text style={{ color: "red" }}>{pokeDetails.contents.message}</Text>
                )}
                {pokeDetails.state === "loading" && <ActivityIndicator />}
                {pokeDetails.state === "hasValue" && (
                    <Text>{pokeDetails.contents.name}</Text>
                )}
            </View>
        </ImageBackground>
    )
}

export default PokeFinder

const styles = StyleSheet.create({
    imgBg: {
        backgroundColor: "#fffc",
        width: "100%",
        gap: 16
    },
    title: {
        fontSize: 32
    },
    textInput: {
        backgroundColor: "#fffc",
        padding: 8,
        borderRadius: 8,
        textAlign: "center"
    },
    button: {
        backgroundColor: "#f8a",
        padding: 8,
        borderRadius: 8
    }
})
