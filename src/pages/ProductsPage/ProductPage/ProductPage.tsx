import { useParams } from 'react-router-dom'
import { ProductDetails } from '../../../components/ProductDetails/ProductDetails.tsx';
import { slugity } from '../../../utils/slugify.ts';
import { useProducts } from '../../../hooks/products/useProducts.ts';
import { DataLoader } from '../../../components/DataLoader/DataLoader.tsx';

import classes from './ProductPage.module.css';
import { AppError } from '../../../errors/index.ts';

export function ProductPage() {
    const { category, itemId } = useParams();
    const normalizedCategory = category ?? "";
    const { data: products, isLoading, error } = useProducts(normalizedCategory);

    const name = itemId?.toLowerCase() ?? "";

    const product = products.find((i) => slugity(i.name) === name);

    return (
        <DataLoader
            loading={isLoading}
            loaded={!!product}
            error={product ? error : new AppError(`Product '${name}' does not exist`)}
        >
            <div className={classes.productPage}>
                {product && <ProductDetails product={product} />}
            </div>
        </DataLoader>
    )
}

