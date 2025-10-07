import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./component/MainLayout/MainLayout";
import { ProductsPage } from "./ProductsPage/ProductsPage";
import { NotFounded } from "./NotFounded/NotFounded";
import { ShopingCard } from "./ShopingCard/ShopingCard";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<MainLayout />}>
          <Route path='products' element={<ProductsPage />} />
          <Route path="shoping-card" element={<ShopingCard />} />
          <Route path="*" element={<NotFounded />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
