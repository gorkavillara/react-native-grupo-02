import {
    StyleSheet,
    Text,
    View,
    Pressable,
    FlatList,
    ScrollView,
    GestureResponderEvent
} from "react-native"
import React, { useEffect, useState, useCallback } from "react"
import axios from "axios"
import { PokeItem, Pokemon } from "../../models"
import PokemonListItem from "./PokemonListItem"

const url = "https://pokeapi.co/api/v2/pokemon?limit=500"

const PokemonFetch = () => {
    const [estado, setEstado] = useState(false)
    const [pokeList, setPokeList] = useState<Array<PokeItem>>([])
    const [pokeUrl, setPokeUrl] = useState<string | null>(null)
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)

    const fetchPokes = async () => {
        console.log("Fetching...")
        const res = await axios.get<{ results: PokeItem[] }>(url)
        setPokeList(res.data.results)
    }

    // const fetchSinglePokemon = useCallback(async () => {
    //     if (!pokeUrl) return

    //     const res = await axios.get<Pokemon>(pokeUrl)
    //     setPokemon(res.data)
    // }, [pokeUrl])

    useEffect(() => {
        if (!pokeUrl) return

        axios
            .get<Pokemon>(pokeUrl)
            .then((res) => setPokemon(res.data))
    }, [pokeUrl])

    useEffect(() => {
        fetchPokes()
    }, [])

    useEffect(() => {
        // Se va a ejecutar únicamente en el renderizado inicial
        console.log("Hola mundo sin dependencias")
        // Aquí se añadirían los listeners
    }, [])

    useEffect(() => {
        // Se va a ejecutar solo cuando cambia estado
        console.log("Esto cambia solo cuando cambia 'estado'")
    }, [estado])

    useEffect(() => {
        // Se va a ejecutar en cada renderizado (incluyendo el primero)
        console.log("Hola mundo")
    })

    useEffect(() => {
        // Se va a lanzar cuando se desmonte
        return () => console.log("Desmontando componente...")
    }, [])

    // Esto solo funciona bien con iPhone nuevo 22/09/2023 (min iPhone 15 Pro MAX)
    return (
        <View style={{ marginBottom: 10, height: 700 }}>
            <Pressable onPress={() => setEstado((prev) => !prev)}>
                <Text>PokemonFetch</Text>
            </Pressable>
            <FlatList
                data={pokeList}
                maxToRenderPerBatch={200}
                onEndReachedThreshold={0.2}
                windowSize={5}
                renderItem={(poke) => (
                    <PokemonListItem
                        poke={poke}
                        onPress={() => setPokeUrl(poke.item.url)}
                    />
                )}
            />
            {/* <ScrollView>
                {pokeList.map((poke, ind) => <Text key={ind}>{poke.name}</Text>)}
            </ScrollView> */}
        </View>
    )
}

export default PokemonFetch
