import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Loader from "./pages/Loader";

function App() {
  return (
    <Routes>
      <Route path="/services" element={<Services />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/" element={<Loader />} />
    </Routes>
  );
}

export default App;
