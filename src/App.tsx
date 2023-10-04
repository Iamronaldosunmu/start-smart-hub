import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        {/* created an empty home page for testing */}
        <Route path="/services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>{" "}
    </>
  );
}

export default App;
