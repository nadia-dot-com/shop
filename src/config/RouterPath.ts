export const ROUTES = {
    home: '/',
    products: '/products',
    productCategory: (category: string) => `/products${category}`,
    sale: '/products/sale',
}