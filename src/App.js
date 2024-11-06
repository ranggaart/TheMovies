import 'swiper/css';

import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import RoutesConfig from './config/Routes';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/*" element={<RoutesConfig />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
