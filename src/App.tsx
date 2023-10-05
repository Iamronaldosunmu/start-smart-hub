import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Consultation from "./pages/consultation";

function App() {
  return (
      <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/consultation" element={<Consultation />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
  );
}

export default App;
