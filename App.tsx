import { AppContextProvider } from "./contexts"
import { AppLayout } from "./layouts"
import { StyledScreen } from "./screens"

export default function App() {
    return (
        <AppContextProvider>
            <AppLayout>
                <StyledScreen />
            </AppLayout>
        </AppContextProvider>
    )
}
