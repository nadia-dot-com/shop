import { useParams } from 'react-router-dom'
import { ProductDetails } from '../../../components/ProductDetails/ProductDetails.tsx';
import { slugity } from '../../../utils/slugify.ts';

import classes from './ProductPage.module.css'
import { useProducts } from '../../../hooks/useProducts.ts';
import { LoadingSpinner } from '../../../components/LoadingSpinner/LoadingSpinner.tsx';
import { ErrorState } from '../../../components/ErrorState/ErrorState.tsx';

export function ProductPage() {
    const { category, itemId } = useParams();
    const normalizedCategory = category ?? "";
    const { data: products, isLoading, error } = useProducts(normalizedCategory);

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <ErrorState />
    }

    if (!products) return null

    const name = itemId?.toLowerCase() ?? "";

    const product = products.find((i) => slugity(i.name) === name);

    return (
        <div className={classes.productPage}>
            {product && <ProductDetails product={product} />}
        </div>
    )
}

