export const ROUTES = {
  basePath: "/house-staff",
  mainLayout: "",
  home: "",
  contact: "contacts",

  products: "products",
  productCategory: (category: string) => `products/${category}`,

  googleCallback: "auth/google-callback",
  userAccount: "/user-account",
  profile: "profile",
  myOrders: "my-orders",
  orderPage: (id: string) => `my-orders/${id}`,
  shoppingCart: "shoping-cart",
  myWishlist: "my-wishlist",

  guestWishlist: "wishlist",
};
