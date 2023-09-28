import { useContext } from "react"
import { Switch, Text, View } from "react-native"
import { AppContext } from "../../contexts/AppContextProvider"
import { standardStyles as styles } from "../../styles"
import { darkStyles } from "./styles"

const StyledScreen = () => {
    const { darkMode, toggleDarkMode } = useContext(AppContext)
    return (
        <View style={styles.container}>
            <Text style={[styles.titulo, darkMode && darkStyles.darkTitle]}>
                StyledScreen
            </Text>
            <Switch value={darkMode} onChange={toggleDarkMode} />
        </View>
    )
}

export default StyledScreen
