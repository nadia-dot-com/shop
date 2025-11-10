import { useUserContext } from "../../../../context/UserContext";

export function MyProfile() {
    const { user } = useUserContext();

    if (!user) return
    const { name, email } = user;
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder={name}
                />
                <input
                    type="text"
                    name="email"
                    placeholder={email}
                />
            </form>
        </div>
    )
}