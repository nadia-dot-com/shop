import { useShopContext } from "../context/ShopContext";
import { ItemProps } from "../types/shopTypes";


export function getItemList(list: string[]) {
    const { items } = useShopContext();

    const itemList = list.reduce<ItemProps[]>((acc, id) => {
        const item = items.find(i => i.id === id);
        if (item) acc.push(item);
        return acc;
    }, [])

    return itemList;
}