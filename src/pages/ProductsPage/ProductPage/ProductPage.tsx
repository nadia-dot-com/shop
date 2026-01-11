import { useParams } from 'react-router-dom'
import { ProductDetails } from '../../../components/ProductDetails/ProductDetails.tsx';
import { slugity } from '../../../utils/slugify.ts';

import classes from './ProductPage.module.css'
import { useProducts } from '../../../hooks/useProducts.ts';
import { LoadingSpinner } from '../../../components/LoadingSpinner/LoadingSpinner.tsx';
import { ErrorState } from '../../../components/ErrorState/ErrorState.tsx';
import { ERROR_MESSAGES } from '../../../constants/messages.ts';

export function ProductPage() {
    const { category, itemId } = useParams();
    const normalizedCategory = category ?? "";
    const { data: products, isLoading, error } = useProducts(normalizedCategory);

    if (isLoading) return <LoadingSpinner />;

    if (error) return <ErrorState message={ERROR_MESSAGES.GENERIC} />;

    if (!products) return <ErrorState message={ERROR_MESSAGES.NOT_FOUND} />;

    const name = itemId?.toLowerCase() ?? "";

    const product = products.find((i) => slugity(i.name) === name);

    return (
        <div className={classes.productPage}>
            {product && <ProductDetails product={product} />}
        </div>
    )
}

