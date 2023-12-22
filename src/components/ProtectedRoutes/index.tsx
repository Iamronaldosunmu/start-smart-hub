import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoutes = () => {
	const [cookies] = useCookies(["auth"]);
	const location = useLocation();
	return cookies?.auth ? (
		<Outlet />
	) : (
		<Navigate
			to="/sign-in"
			state={{ from: location }}
			replace
		/>
	);
};

export default ProtectedRoutes;
