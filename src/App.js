import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
