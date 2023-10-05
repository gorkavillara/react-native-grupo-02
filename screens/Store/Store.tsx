import { StyleSheet, Text, ScrollView, FlatList } from "react-native"
import React from "react"
import Article from "./components/Article"
import { products } from "../../assets/products"
import { contadorState } from "../../app/contadorState"
import { useRecoilState, useRecoilValue } from "recoil"

const Store = () => {
    const contador = useRecoilValue(contadorState)
    return (
        <>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={(product) => (
                    <Article product={product.item} key={product.item.id} />
                )}
            />
            <Text>Valor del contador: {contador}</Text>
        </>
    )
}

export default Store

const styles = StyleSheet.create({})
