
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pensamientos from './pages/Pensamientos';
import Inicio from './pages/Inicio';
import Album from './pages/Album';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/pensamientos' element={<Pensamientos />} />
          <Route path='/album' element={<Album />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
