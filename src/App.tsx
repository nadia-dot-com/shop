import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./component/MainLayout/MainLayout";
import { ProductsPage } from "./ProductsPage/ProductsPage";
import { NotFounded } from "./NotFounded/NotFounded";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path="*" element={<NotFounded />} />
          <Route path='PRODUCTS' element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
