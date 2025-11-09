import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { MainLayout } from "./component/MainLayout/MainLayout";
import { ProductsPage } from "./ProductsPage/ProductsPage";
import { NotFounded } from "./NotFound/NotFound";
import { ItemPage } from "./ProductsPage/ItemPage/ItemPage";
import { MainPage } from "./MainPage/MainPage";
import { ROUTES } from "./config/Routes";
import { Contact } from "./Contact/Contact";
import { UserAccount } from "./UserAccount/UserAccount";
import { MyProfile } from "./UserAccount/NavAccount/MyProfile/MyProfile";
import { ShoppingCart } from "./UserAccount/NavAccount/ShoppingCart/ShoppingCart";
import { MyOrders } from "./UserAccount/NavAccount/MyOrders/MyOrders";
// import { ShopingCard } from "./OrderModal/OrderModal";

function App() {
  return (
    <BrowserRouter basename={ROUTES.basePath}>
      <Routes>

        <Route path={ROUTES.mainLayout} element={<MainLayout />}>

          <Route index element={<MainPage />} />

          <Route path={ROUTES.contact} element={<Contact />} />

          <Route path={ROUTES.products} element={<ProductsPage />}>
            <Route path=":category" element={<Outlet />}>
              <Route path=":itemId" element={<ItemPage />} />
            </Route>
          </Route>

          <Route path={ROUTES.userAccount} element={<UserAccount />}>
            <Route path={ROUTES.profile} element={<MyProfile />} />
            <Route path={ROUTES.shoppingCart} element={<ShoppingCart />} />
            <Route path={ROUTES.myOrders} element={<MyOrders />} />
          </Route>

          <Route path="*" element={<NotFounded />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
