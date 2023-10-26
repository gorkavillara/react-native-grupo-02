import { atom } from "recoil"
import { Habit } from "../models"

const habitosIniciales: Habit[] = [
    {
        id: 0,
        text: "Beber mucha agua",
        completed: false
    },
    {
        id: 1,
        text: "Meditar cinco minutos",
        completed: false
    }
]

export const habitsAtom = atom<Habit[]>({
    key: "habits",
    default: habitosIniciales
})
