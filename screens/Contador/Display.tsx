import { View, Text, StyleSheet, Button } from "react-native"
import React, { useContext } from "react"
import { AppContext } from "../../contexts/AppContextProvider"

const Display = React.memo(
    ({
        contador,
        pasaPorConsola
    }: {
        contador: number
        pasaPorConsola: () => void
    }) => {
        const { darkMode } = useContext(AppContext)
        console.log("Display renderizado")
        // console.log(contexto)
        // const darkMode = contexto.darkMode
        // const getDarkModeStyles = () => {
        //     if (darkMode) {
        //         return [styles.contador, {}]
        //     }
        // }
        return (
            <View>
                <Text
                    // style={
                    //     darkMode
                    //         ? [styles.contador, null]
                    //         : styles.contador
                    // }
                    style={[styles.contador, darkMode && styles.darkMode]}
                >
                    Valor: {contador}
                </Text>
                <Button title="consola" onPress={pasaPorConsola} />
            </View>
        )
    }
)

export default Display

const styles = StyleSheet.create({
    contador: {
        fontSize: 24
    },
    darkMode: {
        color: "red"
    }
})
