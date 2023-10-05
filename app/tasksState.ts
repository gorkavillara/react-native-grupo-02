import { atom, selector } from "recoil"

interface Task {
    text: string
    id: number
}

export const tasksState = atom<Task[]>({
    key: "tasksState",
    default: []
})

export const tasksFilter = atom({
    key: "tasksFilter",
    default: ""
})

export const filteredTasks = selector({
    key: "filteredTasks",
    get: ({ get }) => {
        const filter = get(tasksFilter)
        const totalTasks = get(tasksState)

        return totalTasks.filter(task => task.text === filter)
    }
})