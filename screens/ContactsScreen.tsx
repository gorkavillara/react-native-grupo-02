import { StyleSheet, Text, View, Button, FlatList } from "react-native"
import React from "react"
import { setStatusBarStyle } from "expo-status-bar"
import { useContacts } from "../hooks/useContacts"

const ContactsScreen = () => {
    React.useEffect(() => {
        setStatusBarStyle("dark")
    }, [])
    const { getContacts, contacts } = useContacts()

    // const obtenContactos = () => {
    //     getContacts()
    // }
    return (
        <View>
            <Button title="Obtén contactos" onPress={getContacts} />
            <Text>ContactsScreen</Text>
            <FlatList
                data={contacts}
                renderItem={(contacto) => (
                    <View>
                        <Text key={contacto.index}>{contacto.item.name}</Text>
                        {/* {contacto.item.emails && contacto.item.emails[0] && (
                            <Text key={contacto.index}>
                                {contacto.item.emails[0]}
                            </Text>
                        )} */}
                    </View>
                )}
            />
        </View>
    )
}

export default ContactsScreen

const styles = StyleSheet.create({})
