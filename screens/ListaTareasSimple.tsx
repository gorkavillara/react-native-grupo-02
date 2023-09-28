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

const ListaTareasSimple = () => {
    const [tareas, setTareas] = useState<Tarea[] | Array<Tarea>>(
        tareasIniciales
    )
    const [tareaNueva, setTareaNueva] = useState("")

    const inputRef = useRef<TextInput>(null)

    const nuevaTarea = () => {
        if (!inputRef.current) return
        // 1 - Obtener el texto del input
        // inputRef.current.blur()
        // const textoDelInput = inputRef
        // console.log(textoDelInput)

        console.log(tareaNueva)
        // 2 - Añadir el texto del input como una nueva tarea (de tipo Tarea)
        const tarea: Tarea = {
            id: tareas.length,
            text: tareaNueva,
            completed: false
        }

        setTareaNueva("")
        setTareas((prevTareas) => [...prevTareas, tarea])
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>ListaTareasSimple</Text>
            <TextInput
                ref={inputRef}
                id="text-input"
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

export default ListaTareasSimple

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
