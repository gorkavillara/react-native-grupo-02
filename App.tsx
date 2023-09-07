import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";

export default function App() {
  const handlePress = () => {
    let suma = 0

    for (let index = 0; index < 10; index++) {
      suma += index;
      console.log(suma)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto} onPress={handlePress}>
        ¡Hola mundo!
      </Text>
      <View>
        <Text style={{ textAlign: "center", fontSize: 24 }}>Contador</Text>
        <View style={{ flexDirection: "row" }}>
          <Button title="boton" onPress={handlePress} />
          <Button title="boton" onPress={handlePress} />
        </View>
      </View>
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
