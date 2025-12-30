import { OptionsResponse } from "../types/api/options";
import { API_URL } from "./config"

export const fetchOptions = async(): Promise<OptionsResponse> => {
    const res = await fetch(`${API_URL}/options`)

    if(!res.ok) {
        throw new Error('Failed to fetch options')
    }

    return res.json();
}