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