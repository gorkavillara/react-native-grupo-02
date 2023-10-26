import * as Notifications from "expo-notifications"
import * as Device from "expo-device"
import Constants from "expo-constants"
import { Platform, ToastAndroid } from "react-native"
import { useEffect, useRef } from "react"

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: false,
        shouldSetBadge: false,
        shouldShowAlert: true
    })
})

export const useNotification = () => {
    const receivedListener = useRef<Notifications.Subscription>()
    const setNotificationListener = () => {
        receivedListener.current =
            Notifications.addNotificationReceivedListener((notification) => {
                if (!notification.request.content.title) return

                ToastAndroid.show(
                    `Nueva notificación: ${notification.request.content.title}`,
                    500
                )
            })
    }
    useEffect(() => {
        requestNotificationPermissions().then((token) =>
            console.log("token", token)
        )

        return () => {
            receivedListener.current &&
                Notifications.removeNotificationSubscription(
                    receivedListener.current
                )
        }
    }, [])

    return { programNotification, setNotificationListener, cancelNotification }
}

const programNotification = (text: string, secondsDelay: number, id: number) => {
    Notifications.scheduleNotificationAsync({
        content: {
            title: text,
            data: { habitId: id }
        },
        trigger: {
            seconds: secondsDelay
        }
    })
}

const cancelNotification = async (habitId: number) => {
    const notifications = await Notifications.getAllScheduledNotificationsAsync()
    const myNotification = notifications.find(not => not.content.data.habitId === habitId)
    if (!myNotification) return

    Notifications.cancelScheduledNotificationAsync(myNotification.identifier)
}

const requestNotificationPermissions = async () => {
    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 500, 500, 500]
        })
    }
    if (Device.isDevice) {
        const permissionRes = await Notifications.requestPermissionsAsync()

        if (!permissionRes.granted) return null

        return (
            await Notifications.getExpoPushTokenAsync({
                // projectId: "c22cd58a-0563-406e-9fb5-49cd4c186430"
                projectId: Constants.easConfig?.projectId
            })
        ).data
    }
    return null
}
