import { View, Text, FlatList } from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import { Tarea } from "../../models"

const Item = ({ tarea }: { tarea: Tarea }) => (
    <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <Text>{tarea.texto}</Text>
        {tarea.completado ? (
            <Icon name="check" color="green" />
        ) : (
            <Icon name="remove" color="red" />
        )}
    </View>
)

const TodoList = ({ tareas }: { tareas: Tarea[] }) => {
    return (
        <View>
            <FlatList
                data={tareas}
                renderItem={(item) => <Item tarea={item.item} />}
            />
        </View>
    )
}

export default TodoList
