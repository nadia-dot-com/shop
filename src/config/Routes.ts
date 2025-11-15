export const ROUTES = {
    basePath: '/house-staff/',
    mainLayout: '/',
    home: '',
    contact: 'contacts',

    products: 'products',
    productCategory: (category: string) => `products/${category}`,

    userAccount: 'user-account',
    profile: 'profile',
    myOrders: 'my-orders',
    shoppingCart: 'shoping-cart',
}