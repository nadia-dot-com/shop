export const ROUTES = {
    basePath: '/house-staff/',
    mainLayout: '/',
    home: '',
    contact: 'contacts',
    
    products: 'products',
    productCategory: (category: string) => `products/${category}`,
    sale: 'products/sale',

    userAccount: 'user-account',
    profile: 'profile',

    shoppingCart: 'shoping-cart',
    myOrders: 'my-orders',
}