import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import EnrolledNav from "./components/Enrolled/Nav";
import ProtectedRoutes from "./components/ProtectedRoutes";
import useInitData from "./hooks/useInitData";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import EnrolledCourseDetails from "./pages/EnrolledCourseDetails";
import EnrolledCourses from "./pages/EnrolledCourses";
import Loader from "./pages/Loader";
import Services from "./pages/Services";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Consultation from "./pages/consultation";
import Home from "./pages/home";
import UpcomingEvents from "./pages/upcomingEvents";
import Lessons from "./pages/Lessons";
import Payment from "./pages/Payment";

function App() {
	const { pathname } = useLocation();
	const location = useLocation();
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
			window.scrollTo(0, 0);
		}, 300);
	}, [pathname]);

	// Fetch Data needed for all the pages

	// Data for the services
	useInitData();
	return (
		<>
			{(pathname !== "/" || pathname.includes("lessons")) && <Nav />}
			<AnimatePresence
				mode="wait"
				initial={true}
			>
				<Routes
					key={location.pathname}
					location={location}
				>
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
					<Route
						path="/upcoming-events"
						element={<UpcomingEvents />}
					/>
					<Route
						path="/sign-up"
						element={<SignUp />}
					/>
					<Route
						path="/sign-in"
						element={<SignIn />}
					/>
					<Route
						path="/courses"
						element={<Courses />}
					/>
					<Route
						path="/courses/:id"
						element={<CourseDetails />}
					/>
					<Route element={<ProtectedRoutes />}>
						<Route
							path="/courses/enrolled"
							element={<EnrolledCourses />}
						/>
						<Route
							path="/courses/enrolled/:id"
							element={<EnrolledCourseDetails />}
						/>
						<Route
							path="/courses/enrolled/lessons/:id"
							element={<Lessons />}
						/>
						<Route
							path="/courses/payment"
							element={<Payment />}
						/>
					</Route>
				</Routes>
			</AnimatePresence>
			{/* {pathname !== "/" && <Footer />} */}
		</>
	);
}

export default App;
