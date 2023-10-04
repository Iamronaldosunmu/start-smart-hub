import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Consultation from "./pages/consultation";
import Nav from "./components/Nav";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				{/* created an empty home page for testing */}
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/consultation"
					element={<Consultation />}
				/>
			</Routes>
		</>
	);
}

export default App;
