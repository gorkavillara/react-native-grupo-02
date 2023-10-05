import { StyleSheet, FlatList } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Article from "./components/Article"
import { products } from "../../assets/products"
import Details from "../Details"

const ProductStack = createNativeStackNavigator()

const StoreList = () => (
    <FlatList
        data={products}
        numColumns={2}
        renderItem={(product) => (
            <Article product={product.item} key={product.item.id} />
        )}
    />
)

const Store = () => {
    return (
        <>
            <ProductStack.Navigator initialRouteName="StoreList">
                <ProductStack.Screen
                    name="StoreList"
                    component={StoreList}
                    options={{ title: "Tienda Online" }}
                />
                <ProductStack.Screen name="Details" component={Details} />
            </ProductStack.Navigator>
        </>
    )
}

export default Store

const styles = StyleSheet.create({})
