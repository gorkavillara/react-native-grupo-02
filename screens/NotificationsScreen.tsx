import { StyleSheet, Text, View, Button } from "react-native"
import React, { useEffect } from "react"
import { setStatusBarStyle } from "expo-status-bar"
import { useNotification } from "../hooks/useNotification"

const NotificationsScreen = () => {
    // setStatusBarStyle("dark")
    // const { setStatusBarStyle } = useStatusBar()
    useEffect(() => {
        setStatusBarStyle("dark")
    }, [])
    // Trabajar con las notificaciones
    const { notification, programNotification } = useNotification()

    const recordar = () => {
        // Lanzarme un recordatorio dentro de cinco segundos
        programNotification("Bajar al perro", 5)
    }

    return (
        <View>
            <Text>NotificationsScreen</Text>
            {notification && <View>
                <Text>Título: {notification.title}</Text>
                <Text>Cuerpo: {notification.body}</Text>
                <Text>Data: {JSON.stringify(notification.data)}</Text>
            </View>}
            <Button title="Recordar" onPress={recordar} />
        </View>
    )
}

export default NotificationsScreen

const styles = StyleSheet.create({})
