export interface PokeItem {
    name: string
    url: string
}

export interface Pokemon {
    name: string
    id: number
    sprites: {
        front_default: string
    }
}

export interface Tarea {
    id: number
    text: string
    completed: boolean
}

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}
