import { Text, View, Button } from "react-native"
import React from "react"
import { standardStyles } from "../../styles"
import { useGlobalContador } from "../../hooks/useGlobalContador"

const Contador = () => {
    const { contador, incrementa: incrementaContador } = useGlobalContador()

    return (
        <View style={standardStyles.container}>
            <Text style={standardStyles.titulo}>Contador</Text>
            <Text style={standardStyles.titulo}>Valor: {contador}</Text>
            <Button title="Incrementa Contador" onPress={incrementaContador} />
        </View>
    )
}

export default Contador

