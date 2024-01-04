import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import useModalStore from "../../store/modal";

interface Props {
	children: ReactNode | ReactNode[];
}

const ModalContainer: FC<Props> = ({ children }) => {
	const {
		isOpen,
		actions: { closeModal },
	} = useModalStore();

	if (!isOpen) return null;

	return createPortal(
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			// onClick={() => setIsOpen(false)}
			style={{ backdropFilter: "blur(2px)" }}
			className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-70 overflow-hidden z-50"
		>
			<dialog
				open
				className="w-full lg:w-[800px] min-h-[330px] md:min-h-[373px] bg-white rounded-xl -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 p-6"
			>
				<button
					className="absolute top-8 right-10 w-5 h-w-5"
					onClick={() => closeModal()}
				>
					<img
						className="w-full h-full object-cover"
						src="/assets/close.svg"
						alt="close button"
					/>
				</button>
				{children}
			</dialog>
		</motion.div>,
		document.body
	);
};

export default ModalContainer;
