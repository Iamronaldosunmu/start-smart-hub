import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
       <Routes>
        {/* created an empty home page for testing */}
        <Route path="/home" element={<Home />} />
      </Routes>
      {" "} 

    </>
  );
}

export default App;
