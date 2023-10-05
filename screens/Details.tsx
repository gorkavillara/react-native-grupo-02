import { View, Text } from "react-native"
import {
    useRoute,
    RouteProp,
    useNavigation,
    NavigationProp
} from "@react-navigation/native"
import React from "react"
import { StackNavigatorType } from "../navigation/stacks/StoreStack"
import { products } from "../assets/products"
import Article from "./Store/components/Article"

const Details = () => {
    const navigation =
        useNavigation<NavigationProp<StackNavigatorType, "Details">>()
    const route = useRoute<RouteProp<StackNavigatorType, "Details">>()
    console.log(route)

    const { itemId } = route.params
    console.log(itemId)

    const product = products.find((prod) => prod.id === itemId)
    if (!product)
        return (
            <View>
                <Text>No existe este producto</Text>
            </View>
        )

    navigation.setOptions({
        title: product.title
    })
    return (
        <View style={{ flex: 1 }}>
            <Article product={product} />
        </View>
    )
}

export default Details
