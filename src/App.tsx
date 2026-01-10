import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layouts/MainLayout/MainLayout";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { NotFounded } from "./pages/NotFound/NotFound";
import { ProductPage } from "./pages/ProductsPage/ProductPage/ProductPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ROUTES } from "./config/Routes";
import { Contact } from "./pages/Contact/Contact";
import { UserAccount } from "./pages/UserAccount/UserAccount";
import { MyProfile } from "./pages/UserAccount/NavAccount/MyProfile/MyProfile";
import { ShoppingCart } from "./pages/UserAccount/NavAccount/ShoppingCart/ShoppingCart";
import { MyOrders } from "./pages/UserAccount/NavAccount/MyOrders/MyOrders";
import { OrderPage } from "./pages/UserAccount/NavAccount/MyOrders/OrderPage/OrderPage";
import { MyWishlist } from "./pages/UserAccount/NavAccount/MyWishlist/MyWishlist";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { GoogleCallback } from "./pages/GoogleCallback/GoogleCallback";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback/ErrorFallback";

function App() {
  return (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BrowserRouter basename={ROUTES.basePath}>
      <ScrollToTop />
      <Routes>

        <Route path={ROUTES.googleCallback} element={<GoogleCallback />} />

        <Route path={ROUTES.mainLayout} element={<MainLayout />}>

          <Route index element={<MainPage />} />

          <Route path={ROUTES.contact} element={<Contact />} />

          <Route path={ROUTES.products} element={<ProductsPage />}>
            <Route path=":category" element={<Outlet />}>
              <Route path=":itemId" element={<ProductPage />} />
            </Route>
          </Route>

          <Route path={ROUTES.guestWishlist} element={<Wishlist />} />


          <Route path={ROUTES.userAccount} element={<UserAccount />}>

            <Route
              index
              element={<Navigate to={ROUTES.profile} replace />}
            />

            <Route index path={ROUTES.profile} element={<MyProfile />} />
            <Route path={ROUTES.shoppingCart} element={<ShoppingCart />} />
            <Route path={ROUTES.myOrders} element={<MyOrders />} />
            <Route path={ROUTES.orderPage(":orderId")} element={<OrderPage />} />
            <Route path={ROUTES.myWishlist} element={<MyWishlist />} />
          </Route>

          <Route path="*" element={<NotFounded />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
  );
}

export default App
