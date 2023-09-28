export type ContadorActionType =
    | "devuelveElDoble"
    | "sumaUno"
    | "reset"
    | "restaUno"

export type ContadorAction =
    | { type: ContadorActionType }
    | { type: "sumaX"; payload: number }

export function contadorReductor(
    estado: number,
    accion: ContadorAction
): number {
    if (accion.type === "devuelveElDoble") return estado * 2
    if (accion.type === "sumaUno") return estado + 1
    if (accion.type === "reset") return 0
    if (accion.type === "restaUno") return estado - 1
    if (accion.type === "sumaX") return estado + accion.payload

    return estado
}
