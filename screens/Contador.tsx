import { View, Text, StyleSheet, Pressable } from "react-native"
import React, { useState, useMemo, useCallback } from "react"
import Display from "./Contador/Display"

let valor = 0

const obtenDoble = (val: number) => {
    console.log("Cálculo muy grande...")
    return 2 * val
}

const Contador = () => {
    const [estado, setEstado] = useState(false)
    const [contador, setContador] = useState(0)

    const dobleContador = useMemo(() => obtenDoble(contador), [contador])

    const incrementaValor = () => {
        // console.log(valor)
        setContador((prev) => prev + 1)
    }

    const pasaPorConsola = useCallback(() => console.log(contador), [contador])

    console.log(dobleContador)
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Contador</Text>
            <Display contador={contador} pasaPorConsola={pasaPorConsola} />
            <Pressable style={styles.boton} onPress={incrementaValor}>
                <Text>Incrementar</Text>
            </Pressable>
            <Pressable
                style={styles.boton}
                onPress={() => setEstado((prev) => !prev)}
            >
                <Text>Cambia estado</Text>
            </Pressable>
        </View>
    )
}

export default Contador

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        fontSize: 48
    },
    contador: {
        fontSize: 24
    },
    boton: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: "rgba(0, 0, 255, 0.3)",
        borderRadius: 8
    }
})
