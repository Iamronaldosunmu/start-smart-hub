import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Consultation from "./pages/consultation";
import Nav from "./components/Nav";
import Footer from "./sections/footer";
import Loader from "./pages/Loader";
import ContactUs from "./pages/ContactUs";

function App() {
	const { pathname } = useLocation();
	return (
		<>
			{pathname !== "/" && <Nav />}
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
				<Route path="/contact-us" element={<ContactUs />} />
			</Routes>
			{pathname !== "/" && <Footer />}
		</>
	);
}

export default App;
