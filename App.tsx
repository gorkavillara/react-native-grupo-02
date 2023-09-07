import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Alert,
    Modal,
    ActivityIndicator
} from "react-native"
import Input from "./components/common/Input"
import Boton from "./components/common/Boton"
import { Tarea } from "./models"
import TodoList from "./components/TodoList/TodoList"

const tareasInicial: Tarea[] = [
    {
        texto: "Sacar la basura",
        completado: false
    },
    {
        texto: "Hacer la compra",
        completado: true
    }
]

export default function App() {
    const [tareas, setTareas] = useState<Tarea[]>(tareasInicial)
    const [nuevaTarea, setNuevaTarea] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    // const tareas = estado[0]
    // const cambiarTareas = estado[1]

    const addNuevaTarea = () => {
        setLoading(true)
        setTimeout(() => {
            setTareas((prevTareas) => [
                ...prevTareas,
                { texto: nuevaTarea, completado: false }
            ])
            setLoading(false)
            setNuevaTarea("")
        }, 5000)
    }

    return (
        <>
            {loading && (
                <Modal presentationStyle="fullScreen" statusBarTranslucent>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <ActivityIndicator animating />
                    </View>
                </Modal>
            )}
            <View style={styles.container}>
                <Text style={styles.texto}>¡Hola mundo!</Text>
                <View style={{ flexDirection: "row", gap: 8 }}>
                    <Input
                        placeholder="Escribe tu tarea"
                        iconName="pencil"
                        iconColor="#dd22ff"
                        value={nuevaTarea}
                        changeValue={setNuevaTarea}
                    />
                    <Boton
                        title="Añadir"
                        loading={loading}
                        onPress={addNuevaTarea}
                    />
                </View>
                <TodoList tareas={tareas} />
                <StatusBar style="auto" />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    texto: { fontSize: 32, marginVertical: 16 }
})
