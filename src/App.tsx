import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Consultation from "./pages/consultation";
import Nav from "./components/Nav";
import Footer from "./sections/footer";
import Loader from "./pages/Loader";
import ContactUs from "./pages/ContactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";

function App() {
	const { pathname } = useLocation();
	useEffect(() => {
		AOS.init({ once: true });
	}, []);

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 300);
	}, [pathname]);

	return (
		<>
			{pathname !== "/" && <Nav />}
			<AnimatePresence
				mode="wait"
				initial={true}
			>
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
						path="/consultation/:type"
						element={<Consultation />}
					/>
					<Route
						path="/services"
						element={<Services />}
					/>
					<Route
						path="/contact-us"
						element={<ContactUs />}
					/>
				</Routes>
			</AnimatePresence>
			{pathname !== "/" && <Footer />}
		</>
	);
}

export default App;
