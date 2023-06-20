import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {HomePage} from './Pages/HomePage/HomePage';
import {Cards} from './components/Main/Cards'
import {PageCart} from './Pages/PagesCart/PageCart'
import { UserProvider } from './Context/UserProvider';
import { Contacto } from './Pages/Contacto/Contacto';
import { Favorites } from './Pages/PagesFavorites/PagesFavorites';
import { ProductDetails } from './Pages/ProductDetails/ProductDetails';
import { Register } from './components/Login/Register';
import { Login } from './components/Login/Login';
import { UserAccountPage } from './Pages/UserAccountPage/UserAccountPage';

export function App() {
  return ( 
  <UserProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/imagen" element={<Cards/>} />
            <Route path="/cart" element={<PageCart/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path='/favorites' element={<Favorites/>} />
            <Route path="/detail/:id" element={<ProductDetails/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/UserAccount' element={<UserAccountPage/>} />
        </Routes>
    </BrowserRouter>
</UserProvider>
  );
}




