import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./components/Booking";
import ConfirmBooking from "./components/ConfirmBooking";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve-a-table" element={<Booking/>}/>
          <Route path="/confirmation" element={<ConfirmBooking/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
