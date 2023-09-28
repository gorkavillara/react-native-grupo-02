import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useContext } from "react"
import { AppContext } from "../contexts/AppContextProvider"

const ContadorDeContexto = () => {
    const { contador, dispatchContador } = useContext(AppContext)
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>ContadorDeContexto</Text>
            <Text style={styles.contador}>Valor: {contador}</Text>
            <Pressable
                style={styles.boton}
                onPress={() => dispatchContador({ type: "sumaUno" })}
            >
                <Text>Incrementa</Text>
            </Pressable>
            <Pressable
                style={styles.boton}
                onPress={() => dispatchContador({ type: "sumaX", payload: 5 })}
            >
                <Text>Suma 5</Text>
            </Pressable>
        </View>
    )
}

export default ContadorDeContexto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        fontSize: 36
    },
    contador: {
        fontSize: 24
    },
    boton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "#32f4"
    }
})
