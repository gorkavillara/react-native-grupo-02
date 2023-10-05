import { Text, View, Button } from "react-native"
import React from "react"
import { standardStyles } from "../../styles"
import { contadorState } from "../../app/contadorState"
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil"

const Contador = () => {
    // const [contador, setContador] = useRecoilState(contadorState)
    const contador = useRecoilValue(contadorState)
    const setContador = useSetRecoilState(contadorState)
    const resetContador = useResetRecoilState(contadorState)

    const incrementaContador = () => {
        // setContador(contador + 1)
        // setContador(contador + 1)
        // setContador(contador + 1)
        // setContador(contador + 1)
        // setContador(prev => prev + 1)
        // setContador(prev => prev + 1)
        setContador(prev => prev + 1)
    }

    return (
        <View style={standardStyles.container}>
            <Text style={standardStyles.titulo}>Contador</Text>
            <Text style={standardStyles.titulo}>Valor: {contador}</Text>
            <Button title="Incrementa Contador" onPress={incrementaContador} />
            <Button title="Reset Contador" onPress={resetContador} />
        </View>
    )
}

export default Contador

