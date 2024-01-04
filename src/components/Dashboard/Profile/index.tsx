import { motion } from "framer-motion";
import useModalStore from "../../../store/modal";

const Profile = () => {
	const { openModal } = useModalStore((s) => s.actions);
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="px-5 lg:px-10 pt-10 font-poppins"
		>
			<h1 className="font-bold text-3xl text-[#212338]">Profile</h1>
			<hr className="mt-7 w-[98%] mx-auto" />
			<div className="mt-8 lg:mt-5">
				<div className="w-full lg:max-w-[450px] border border-[#d7dadb] divide-y-2 rounded-md text-[#212338]">
					<div className="flex justify-between py-[10px] px-3 sm:px-5 sm:pr-8 lg:px-4">
						<div>
							<p className="mb-2 text-sm sm:text-base text-[#717171] font-semibold">Username</p>
							<span className="text-[#212338] text-sm sm:text-base font-bold">Aghedo Jason</span>
						</div>
						<button
							onClick={() => openModal("fullname")}
							className="text-[#4B8CEA] font-semibold text-sm sm:text-base"
						>
							Edit
						</button>
					</div>
					<div className="flex justify-between py-[10px] px-3 sm:px-5 sm:pr-8 lg:px-4">
						<div>
							<p className="mb-2 text-sm sm:text-base text-[#717171] font-semibold">Email Address</p>
							<span className="text-[#212338] text-sm sm:text-base font-bold">Jason.Aghedo@gmail.com</span>
						</div>
						<button
							onClick={() => openModal("email")}
							className="text-[#4B8CEA] font-semibold text-sm sm:text-base"
						>
							Edit
						</button>
					</div>
					<div className="flex justify-between py-[10px] px-3 sm:px-5 sm:pr-8 lg:px-4">
						<div>
							<p className="mb-2 text-sm sm:text-base text-[#717171] font-semibold">Password</p>
							<span className="text-[#212338] text-sm sm:text-base font-bold">**********</span>
						</div>
						<button
							onClick={() => openModal("password")}
							className="text-[#4B8CEA] font-semibold text-sm sm:text-base"
						>
							Change
						</button>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Profile;
