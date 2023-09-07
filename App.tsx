import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const handlePress = () => Alert.alert("Has hecho click");
  return (
    <View style={styles.container}>
      <Text style={styles.texto} onPress={handlePress}>
        ¡Hola mundo!
      </Text>
      <Button title="Botón" onPress={() => Alert.alert("Has hecho click")} />
      <TouchableOpacity onPress={() => null}>
        <Text
          style={{
            fontSize: 24,
            paddingVertical: 8,
            paddingHorizontal: 16,
            backgroundColor: "#dd0088",
            color: "white",
            borderRadius: 8,
          }}
        >
          Otro botón
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: { fontSize: 32, marginVertical: 16 },
});
