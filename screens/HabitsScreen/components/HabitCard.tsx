import { Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { Habit } from "../../../models"
import { BlurView } from "expo-blur"
import Icon from "react-native-vector-icons/Ionicons"

const HabitCard = ({ habit }: { habit: Habit }) => {
    return (
        <View style={styles.card}>
            <BlurView intensity={30} style={styles.blurCard}>
                <Text style={styles.cardText}>{habit.text}</Text>
                <Pressable style={styles.notification}>
                    <Icon name="notifications-outline" color="black" />
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
