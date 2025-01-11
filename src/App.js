import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Error from './pages/Error'
import SharedLayout from "./pages/SharedLayout";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout />} >
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productID' element={<SingleProduct/>} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
    <footer>Footer</footer>
  </BrowserRouter>
}

export default App;
