import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useRef, useState } from "react";
// import axiosInstance from "../../services/apiClient";
// import LottieAnimation from "../Lottie";
// import fileLoader from "../Lottie/fileLoader.json";
// import cancelFileLoader from "../Lottie/cancelFileLoader.json";
import { AnimatePresence, motion } from "framer-motion";
import axiosInstance from "../../services/apiClient";

interface FileUploadProps {
	label: string;
	file: { secure_url: string; public_id: string } | undefined;
	setFile: Dispatch<SetStateAction<{ secure_url: string; public_id: string }>>;
	fieldName: string;
	error?: string;
	onFileUpload?: () => void;
}


const FileUpload: React.FC<FileUploadProps> = ({ label, file, setFile, fieldName, error, onFileUpload }) => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null);
	const [loading, setLoading] = useState(false);
	const [deleteLoading, setDeleteLoading] = useState(false);
	const [fileName, setFileName] = useState("");
	const uploadImage = useRef<HTMLImageElement>(null);
	const onUploadContainerClick = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		if (e.target == containerRef.current || e.target == textRef.current || e.target == uploadImage.current) fileInputRef.current!.click();
	};
	const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
		setLoading(true);
		try {
			const file = e.currentTarget.files![0];
			if (file) {
				const formData = new FormData();
				formData.append("image", e.currentTarget.files![0]);
				const { data } = await axiosInstance.post("/upload", formData);
				const payload: any = {};
				payload[fieldName] = {
					...data,
					// fileName: file.name,
				};
				setFileName(file.name);
				//   const { data: backendData } = await axiosInstance.patch(
				//   );
				setFile(payload[fieldName]);
				if (onFileUpload) onFileUpload();
			}
		} catch (error: any) {
			if (!error.response) alert("Please Check your Internet Connection🥲");
			else {
				alert(error.response?.data?.message);
			}
		} finally {
			setLoading(false);
		}
	};
	const onClose = async () => {
		console.log("this was clicked");
		try {
			setDeleteLoading(true);
			const response1 = await axiosInstance.delete(`/upload/${file?.public_id}`);
			setFile({ secure_url: "", public_id: "" });
			setFileName("");
		} catch (error: any) {
			if (!error.response) alert("Please Check your Internet Connection🥲");
			else {
				alert(error.response?.data?.message);
			}
		} finally {
			setDeleteLoading(false);
		}
	};
	return (
		<div className={"w-full"}>
			<input
				accept=".pdf,.docx,.doc"
				onChange={onFileChange}
				style={{ display: "none" }}
				ref={fileInputRef}
				type="file"
			></input>
			<label className={"text-sm lg:text-base leading-5 lg:leading-normal block text-[#331B3BA8] capitalize"}>{label}</label>
			<div
				ref={containerRef}
				onClick={onUploadContainerClick}
				className={"uploadContainer"}
			>
				<AnimatePresence>
					{!file?.secure_url && !loading && (
						<>
							{/* <motion.img
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								ref={uploadImage}
								className={styles.folderImage}
								src="/icons/uploadIcon.svg"
							/> */}
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								ref={textRef}
								className={"text"}
							>
								Click To Upload File
							</motion.p>
						</>
					)}
					{file?.secure_url && !loading && (
						<>
							<motion.img
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								className={"folderImage"}
								src="/assets/files.svg"
							/>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								onClick={(e) => e.stopPropagation()}
								className={"uploaded"}
							>
								<motion.a
									href={file.secure_url}
									target="_blank"
									rel="noreferrer"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 20 }}
									className={"secure_url"}
								>
									{fileName}
								</motion.a>
								<div>
									{!deleteLoading && (
										<div onClick={onClose}>
											<motion.img
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												onClick={onClose}
												whileHover={{ scale: 1.1 }}
												style={{ position: "relative", top: 3 }}
												src="/assets/close.svg"
											/>
										</div>
									)}
									{deleteLoading && (
										<motion.img
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											onClick={onClose}
											whileHover={{ scale: 1.1 }}
											style={{ position: "relative" }}
											className="w-[10px]"
											src="/assets/loading.gif"
										/>
									)}
								</div>
							</motion.div>
						</>
					)}
					{loading && (
						// <LottieAnimation
						// 	width={140}
						// 	height={78}
						// 	animationData={fileLoader}
						// />
						// <p>Loading...</p>
						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={onClose}
							whileHover={{ scale: 1.1 }}
							style={{ position: "relative" }}
							className="w-[10px]"
							src="/assets/loading.gif"
						/>
					)}
				</AnimatePresence>
			</div>
			<AnimatePresence>
				{error && (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={"error"}
					>
						{error}
					</motion.p>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FileUpload;
