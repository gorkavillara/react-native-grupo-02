import { useState } from "react"

type StatusBarStyle = "light" | "dark"

export const useStatusBar = () => {
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>("light")

    return { statusBarStyle, setStatusBarStyle }
}