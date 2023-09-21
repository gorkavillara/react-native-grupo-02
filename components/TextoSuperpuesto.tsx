import { View, Text, StyleSheet } from "react-native"
import React from "react"

const TextoSuperpuesto = () => {
    return (
        <View>
            <Text style={styles.textoPrincipal}>Nuevo</Text>
            <Text style={styles.textoSuperpuesto}>Zapatillas LIDL</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textoPrincipal: {
        fontSize: 92,
        textTransform: "uppercase",
        textAlign: "right",
        fontWeight: "800",
        opacity: 0.15
    },
    textoSuperpuesto: {
        textAlign: "right",
        fontSize: 24,
        fontWeight: "600",
        marginTop: -37
    }
})

export default TextoSuperpuesto
