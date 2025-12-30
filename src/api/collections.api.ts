import { Collection } from "../types/api/collection"
import { API_URL } from "./config"

export const fetchCollections = async (): Promise<Collection[]> => {
    const res = await fetch(`${API_URL}/collections`)

    if (!res.ok) {
        throw new Error('Failed to fetch collections')
    }

    return res.json()
}