import { useCategories } from "../../hooks/categories/useCategories";
import { useCollections } from "../../hooks/collection/useCollections"; 
import { DataLoader } from "../DataLoader/DataLoader";
import { ProductNavView } from "./ProductNavView/ProductNavView";

export function ProductNav() {
    const {
        data: categories,
        isLoading: isCategoriesLoading,
        error: categoriesError,
    } = useCategories();

    const {
        data: collections,
        isLoading: isCollectionsLoading,
        error: collectionsError,
    } = useCollections();

    return (
        <DataLoader
            loading={isCategoriesLoading || isCollectionsLoading}
            loaded={!!categories && !!collections}
            error={categoriesError || collectionsError}
        >
            <ProductNavView categories={categories} collections={collections} />
        </DataLoader>
    )
}