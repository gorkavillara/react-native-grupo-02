import { StyleSheet, Text, View, FlatList } from "react-native"
import React from "react"
import { useHabits } from "../../../hooks/useHabits"
import HabitCard from "./HabitCard"

const HabitsContainer = () => {
    const { habits } = useHabits()
    return (
        <View style={{ width: "100%" }}>
            <FlatList
                contentContainerStyle={{ alignItems: "center" }}
                data={habits}
                renderItem={(habit) => (
                    <HabitCard habit={habit.item} key={habit.index} />
                )}
            />
        </View>
    )
}

export default HabitsContainer

const styles = StyleSheet.create({})
