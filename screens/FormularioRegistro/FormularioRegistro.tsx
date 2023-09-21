import React from "react"
import { StyleSheet, Text, View, TextInput, Switch, Button } from "react-native"
import { Formik } from "formik"

const initialValues = {
    username: "",
    password: "",
    LOPD: false
}

const FormularioRegistro = () => {
    const handleSubmit = (values: any) => {
        console.log(values)
        // Se hace una llamada a una api... se devuelve la info y se cambia de pantalla
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Formulario de Registro</Text>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ handleSubmit, values, handleChange }) => (
                    <View style={styles.formView}>
                        <TextInput
                            value={values.username}
                            style={styles.input}
                            placeholder="Tu nombre de usuario"
                            onChangeText={handleChange("username")}
                        />
                        <TextInput
                            value={values.password}
                            style={styles.input}
                            secureTextEntry
                            placeholder="Tu contraseña"
                            onChangeText={handleChange("password")}
                        />
                        {/* <Switch
                            onValueChange={handleChange("LOPD")}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={values.LOPD ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            value={values.LOPD}
                        /> */}
                        <Button title="enviar" onPress={() => handleSubmit()} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default FormularioRegistro

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titulo: {
        fontSize: 32,
        textAlign: "center"
    },
    formView: {
        gap: 16
    },
    input: {
        borderColor: "#2b2b2b99",
        backgroundColor: "#ffffff99",
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 2,
        paddingHorizontal: 8
    }
})
