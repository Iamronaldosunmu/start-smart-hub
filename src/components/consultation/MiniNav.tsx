import React, { FC } from "react";
import { motion } from "framer-motion";
import Container from "../container";

interface Props {
	pages: number[];
	currentPage: number;
	setPage: (page: number) => void;
}

const MiniNav: FC<Props> = ({ pages, currentPage, setPage }) => {
	return (
		<Container className="my-10 lg:my-14">
			<div className="flex justify-center items-center gap-x-10 sm:gap-x-3">
				{pages.map((page) => (
					<React.Fragment key={page}>
						<div
							onClick={() => setPage(page)}
							className="flex items-center"
						>
							<button className={`rounded-full w-[34px] lg:w-[44px] lg:h-[44px] xl:w-[64px] h-[34px] xl:text-xl xl:h-[64px] mx-auto font-DMSans self-start ${currentPage === page ? "bg-[#4A3AFF] text-white" : "bg-[#EFF0F6] text-[#6F6C90]"} transition-colors duration-300`}>{page}</button>
						</div>
						{page !== pages.length && (
							<div className="relative max-w-[100px] lg:max-w-[200px] w-full bg-[#EFF0F6] rounded-[40px] h-2 hidden sm:block">
								<motion.div
									initial={{ width: "50%" }}
									animate={{ width: page === currentPage ? "50%" : page < currentPage ? "100%" : "0%" }}
									className="bg-[#4A3AFF] rounded-[40px] h-full absolute"
								></motion.div>
							</div>
						)}
					</React.Fragment>
				))}
			</div>
		</Container>
	);
};

export default MiniNav;
