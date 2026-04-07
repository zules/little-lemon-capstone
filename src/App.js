import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
