import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    FlatList
} from "react-native"
import React, { useState, useRef } from "react"
import { Tarea } from "../models"
import { useLista } from "../hooks/useLista"

const tareasIniciales: Array<Tarea> | Tarea[] = [
    {
        id: 0,
        text: "Aprender RN",
        completed: true
    },
    {
        id: 1,
        text: "Aprender Estilos",
        completed: false
    }
]

const ListaTareasConHook = () => {
    const { lista: tareas, nuevoElemento: addNuevaTarea } =
        useLista<Tarea>(tareasIniciales)
    // const [tareas, setTareas, addNuevaTarea] = useLista<Tarea>(tareasIniciales)

    const [tareaNueva, setTareaNueva] = useState("")

    const nuevaTarea = () => {
        console.log(tareaNueva)
        setTareaNueva("")
        addNuevaTarea({ id: tareas.length, text: tareaNueva, completed: false })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>ListaTareasConHook</Text>
            <TextInput
                style={styles.textInput}
                value={tareaNueva}
                onChangeText={setTareaNueva}
            />
            <Pressable style={styles.boton} onPress={nuevaTarea}>
                <Text style={styles.textoBoton}>Aceptar</Text>
            </Pressable>
            <FlatList
                data={tareas}
                renderItem={(item) => <Text>{item.item.text}</Text>}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default ListaTareasConHook

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16
    },
    titulo: {
        fontSize: 36
    },
    contador: {
        fontSize: 24
    },
    boton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: "#32f4",
        borderRadius: 8,
        width: "80%"
    },
    textoBoton: {
        textAlign: "center"
    },
    textInput: {
        backgroundColor: "#fefefe99",
        padding: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#aaa9",
        width: "80%"
    }
})
