import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Routes>
        {/* created an empty home page for testing */}
        <Route path="/home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />


      </Routes>{" "}

    </>
  );
}

export default App;
