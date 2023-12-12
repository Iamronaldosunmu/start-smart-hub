import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../store/auth";

const ProtectedRoutes = () => {
	const auth = useAuth();
	const location = useLocation();
	return auth ? (
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
