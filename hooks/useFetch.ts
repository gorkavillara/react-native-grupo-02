import axios from "axios"
import { useEffect, useState } from "react"

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<{ message: string } | null>(null)

    useEffect(() => {
        setLoading(true)
        setTimeout(
            () =>
                axios
                    .get(url)
                    .then((res) => setData(res.data.results))
                    .catch((err) => setError(err))
                    .finally(() => setLoading(false)),
            3000
        )
    }, [])

    return {
        data,
        loading,
        error
    }
}
