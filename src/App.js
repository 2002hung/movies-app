import 'swiper/swiper.min.css';
import './assets/boxicons-2.1.4/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
