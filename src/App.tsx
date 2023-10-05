import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Map from "./components/ContactUs/Map/Map";

function App() {
  return (
    <>
      <Routes>
        {/* created an empty home page for testing */}
        <Route path="/services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>{" "}
      <Map position={[6.45407, 3.39467]} />
    </>
  );
}

export default App;
