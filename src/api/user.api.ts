export const fetchUser = async (): Promise<any> => {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("No token");
    }

    const res = await fetch('http://localhost:3000/auth/user', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    
    if (!res.ok) {
        throw new Error('Failed to fetch user')
    }

    return res.json();
}