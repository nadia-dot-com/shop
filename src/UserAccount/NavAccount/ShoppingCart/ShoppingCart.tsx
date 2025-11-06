import { useUserContext } from "../../../context/UserContext";

export function ShoppingCart() {
  const { user } = useUserContext();
  
      if (!user) return 
      const { name } = user;
    return (
        <div>
        Shoping Cart {name}
        </div>
    )
}