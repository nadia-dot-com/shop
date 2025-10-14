import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./component/MainLayout/MainLayout";
import { ProductsPage } from "./ProductsPage/ProductsPage";
import { NotFounded } from "./NotFound/NotFound";
import { ItemPage } from "./ItemPage/ItemPage";
// import { ShopingCard } from "./OrderModal/OrderModal";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='products' element={<ProductsPage />} >
            <Route path=":itemId" element={<ItemPage />} />
          </Route>

          {/* <Route path="shoping-card" element={<ShopingCard />} /> */}
          <Route path="*" element={<NotFounded />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
