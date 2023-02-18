import './App.css';
import ItemDetailContainer from './comoponentes/ItemDetailContainer';
import ItemListConteiner from './comoponentes/ItemListContainer';
import NavBar from './comoponentes/NavBar';
import Cart from './comoponentes/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListConteiner />} />
          <Route path='/categoria' element={<ItemListConteiner />} />
          <Route path='detalle' element={<ItemDetailContainer />} />
          <Route path='Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;