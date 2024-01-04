import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import DashBoardNav from "../components/Dashboard/DashBoardNav";
import Profile from "../components/Dashboard/Profile";
import EditEmail from "../components/EditModal/Email";
import EditFullName from "../components/EditModal/FullName";
import ChangePassword from "../components/EditModal/Password";
import ModalContainer from "../components/ModalContainer";
import useModalStore from "../store/modal";

export type PageType = "Edit Profile" | "Purchase History";

const Dashboard = () => {
	const [page, setPage] = useState<PageType>("Edit Profile");
	const modal = useModalStore((s) => s.modal);
	return (
		<>
			<section className="md:grid md:grid-cols-[250px_auto] lg:grid-cols-[300px_auto] xl:grid-cols-[350px_auto] mt-16 h-full overflow-hidden">
				<DashBoardNav
					page={page}
					setPage={setPage}
				/>
				<AnimatePresence>{page === "Edit Profile" ? <Profile key="profile" /> : null}</AnimatePresence>
			</section>
			{page === "Edit Profile" && (
				<ModalContainer>
					{modal === "fullname" ? <EditFullName /> : null}
					{modal === "email" ? <EditEmail /> : null}
					{modal === "password" ? <ChangePassword /> : null}
				</ModalContainer>
			)}
		</>
	);
};

export default Dashboard;
