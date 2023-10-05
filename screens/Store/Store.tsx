import { StyleSheet, Text, ScrollView, FlatList } from "react-native"
import React from "react"
import Article from "./components/Article"
import { products } from "../../assets/products"

const Store = () => {
    return (
        // <ScrollView>
        //     {products.map((product) => (
        //         <Article product={product} key={product.id} />
        //     ))}
        // </ScrollView>
        <FlatList
            data={products}
            numColumns={2}
            renderItem={(product) => (
                <Article product={product.item} key={product.item.id} />
            )}
        />
    )
}

export default Store

const styles = StyleSheet.create({})
