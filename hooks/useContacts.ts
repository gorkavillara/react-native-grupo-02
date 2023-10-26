import * as Contacts from "expo-contacts"
import { useEffect, useState } from "react"

interface Contact {
    name: string
    phone: string | undefined
}

export const useContacts = () => {
    const [contacts, setContacts] = useState<Contacts.Contact[]>([])
    useEffect(() => {
        Contacts.requestPermissionsAsync().then(console.log)
    }, [])

    const getContacts = () => {
        Contacts.getContactsAsync({ fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers] }).then((contactsRes) =>
            setContacts(
                contactsRes.data
                // contactsRes.data.map((contacto) => ({
                //     name: contacto.firstName || "",
                //     phone: contacto.phoneNumbers
                //         ? contacto.phoneNumbers[0].digits
                //         : ""
                // })
                // )
            )
        )
    }

    return { getContacts, contacts }
}
