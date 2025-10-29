import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./component/MainLayout/MainLayout";
import { ProductsPage } from "./ProductsPage/ProductsPage";
import { NotFounded } from "./NotFound/NotFound";
import { ItemPage } from "./ProductsPage/ItemPage/ItemPage";
import { MainPage } from "./MainPage/MainPage";
import { Categories } from "./component/Categories/Categories";
// import { ShopingCard } from "./OrderModal/OrderModal";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='house-staff' element={<MainPage />} />
          <Route path='products' element={<ProductsPage />} >
          <Route path=":category" element={<Categories/>}/>
            <Route path=":category/:itemId" element={<ItemPage />} />
          </Route>
          <Route path="*" element={<NotFounded />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
