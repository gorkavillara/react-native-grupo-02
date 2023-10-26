import * as Notifications from "expo-notifications"
import { useEffect, useState, useRef } from "react"
import { Alert, Platform, ToastAndroid } from "react-native"
import * as Device from "expo-device"

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
    })
})

export const useNotification = () => {
    const [notificationsToken, setNotificationsToken] = useState<string | null>(
        null
    )
    const [notification, setNotification] = useState<Notifications.NotificationContent | null>(null)
    const receivedListener = useRef<Notifications.Subscription>()

    useEffect(() => {
        requestNotificationPermission().then((token) => {
            // Enviar el token a nuestro backend
            setNotificationsToken(token)
        })

        receivedListener.current =
            Notifications.addNotificationReceivedListener((notification) => {
                console.log(notification)
                setNotification(notification.request.content)
                ToastAndroid.show(
                    `Nueva notificación: ${notification.request.content.title}`,
                    500
                )
            })

        return () => {
            // Desuscribimos
            receivedListener.current && Notifications.removeNotificationSubscription(
                receivedListener.current
            )
        }
    }, [])

    const programNotification = (text: string, secondsDelay: number) => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: text
            },
            trigger: {
                seconds: secondsDelay
            }
        })
    }

    return { notificationsToken, notification, programNotification }
}

const requestNotificationPermission = async () => {
    let token: string | null = null

    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            lightColor: "#FF44DDDD",
            vibrationPattern: [0, 250, 250, 250]
        })
    }

    if (Device.isDevice) {
        // Solicitar permisos
        const permissionsRes = await Notifications.requestPermissionsAsync()
        console.log(permissionsRes)
        if (!permissionsRes.granted) {
            Alert.alert("Permiso de notificaciones no concedido")
            return null
        }
        // Setear el token
        const tokenRes = await Notifications.getExpoPushTokenAsync({
            projectId: "c22cd58a-0563-406e-9fb5-49cd4c186430"
        })
        console.log("token", tokenRes)
        token = tokenRes.data
    }

    return token
}
