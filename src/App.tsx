import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Consultation from "./pages/consultation";
import Nav from "./components/Nav";
import Footer from "./sections/footer";
import Loader from "./pages/Loader";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route
					path="/"
					element={<Loader />}
				/>
				<Route
					path="/home"
					element={<Home />}
				/>
				<Route
					path="/about-us"
					element={<AboutUs />}
				/>
				<Route
					path="/consultation"
					element={<Consultation />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
