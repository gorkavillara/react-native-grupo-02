import { useRecoilState } from "recoil"
import { habitsAtom } from "../app/habitsState"

export const useHabits = () => {
    const [habits, setHabits] = useRecoilState(habitsAtom)

    return { habits }
}