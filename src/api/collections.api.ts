import { Collection } from "../types/api/collection"

export const fetchCollections = async (): Promise<Collection[]> => {
    const res = await fetch('http://localhost:3000/collections')

    if (!res.ok) {
        throw new Error('Failed to fetch collections')
    }

    return res.json()
}