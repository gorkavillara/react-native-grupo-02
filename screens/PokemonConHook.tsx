import {
    StyleSheet,
    Text,
    View,
    Pressable,
    FlatList,
    ActivityIndicator
} from "react-native"
import React, { useId } from "react"
import PokemonListItem from "./PokemonFetch/PokemonListItem"
import { PokeItem } from "../models"
import { useFetch } from "../hooks/useFetch"

const url = "https://pokeapi.co/api/v2/pokemon?limit=500"
const PokemonConHook = () => {
    const { data, loading, error } = useFetch<PokeItem[]>(url)
    const id = useId()

    if (error) return <Text style={{ color: "red" }}>{error.message}</Text>
    if (loading) return <ActivityIndicator size={90} />

    return (
        <View style={{ marginBottom: 10, height: 700 }}>
            <Pressable onPress={() => console.log("Press")}>
                <Text>PokemonFetch</Text>
            </Pressable>
            {/* {error && <Text style={{ color: "red" }}>{error.message}</Text>} */}
            {/* {loading && <ActivityIndicator size={90} />} */}
            {data && data.length > 0 && (
                <FlatList
                    id={id}
                    data={data}
                    renderItem={(poke) => (
                        <PokemonListItem
                            poke={poke}
                            onPress={() => console.log(poke.item.url)}
                        />
                    )}
                />
            )}
        </View>
    )
}

export default PokemonConHook

const styles = StyleSheet.create({})
