import { View, Text, Pressable, GestureResponderEvent, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { PokeItem } from '../../models';

const PokemonListItem = memo(
    ({
        poke,
        onPress
    }: {
        poke: { index: number; item: PokeItem }
        onPress: (event: GestureResponderEvent) => void
    }) => {
        // console.log(poke.index)
        return (
            <Pressable onPress={onPress}>
                <Text style={styles.pokeText}>
                    {poke.index}. {poke.item.name}
                </Text>
            </Pressable>
        )
    }
)

export default PokemonListItem

const styles = StyleSheet.create({
    pokeText: {
        fontSize: 24
    }
})