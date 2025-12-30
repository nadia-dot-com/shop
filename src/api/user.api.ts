import { UserData } from "../types/userTypes";
import { API_URL } from "./config";

export const fetchUser = async (): Promise<any> => {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("No token");
    }

    const res = await fetch(`${API_URL}/user`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch user')
    }

    return res.json();
}

export async function updateUserProfile(
    data: Partial<UserData>
): Promise<UserData> {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("No token");
    }

    const res = await fetch(`${API_URL}/user`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Failed to update user")
    }

    return res.json();
}