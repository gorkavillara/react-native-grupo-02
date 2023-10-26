import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { Habit } from "../../../models"
import { BlurView } from "expo-blur"
import Icon from "react-native-vector-icons/Ionicons"
import { useNotification } from "../../../hooks/useNotification"
import Camera from "./Camera"
import { useNavigation } from "@react-navigation/native"

const HabitCard = ({ habit }: { habit: Habit }) => {
    const navigation = useNavigation()
    const { programNotification, cancelNotification } = useNotification()

    const snoozeHabit = () => {
        programNotification(`Recuerda: ${habit.text}`, 2, habit.id)
    }

    const cancelSnooze = () => {
        cancelNotification(habit.id)
    }

    const openCamera = () => {
        // setCameraOpen(true)
        // @ts-ignore
        navigation.navigate("Camera")
    }
    return (
        <View style={styles.card}>
            <BlurView intensity={30} style={styles.blurCard}>
                <Pressable
                    style={[styles.notification, { backgroundColor: "#4f6" }]}
                    onPress={openCamera}
                >
                    <Icon name="checkmark-done" color="black" />
                </Pressable>
                <Text style={styles.cardText}>{habit.text}</Text>
                <Pressable style={styles.notification} onPress={snoozeHabit}>
                    <Icon name="notifications-outline" color="black" />
                </Pressable>
                <Pressable style={styles.notification} onPress={cancelSnooze}>
                    <Icon name="notifications-off" color="black" />
                </Pressable>
            </BlurView>
        </View>
    )
}

export default HabitCard

const styles = StyleSheet.create({
    card: {
        borderWidth: 0.6,
        borderColor: "white",
        borderRadius: 16,
        marginBottom: 16,
        width: "80%",
        overflow: "hidden"
    },
    blurCard: {
        padding: 16,
        width: "100%",
        flexDirection: "row",
        gap: 8
    },
    cardText: {
        color: "white",
        fontWeight: "300"
    },
    notification: {
        padding: 4,
        backgroundColor: "white",
        borderRadius: 4
    }
})
