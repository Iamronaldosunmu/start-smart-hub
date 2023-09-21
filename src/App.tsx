import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        {/* created an empty home page for testing */}
        <Route path="/home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs/>} />

      </Routes>{" "}


    </>
  );
}

export default App;
