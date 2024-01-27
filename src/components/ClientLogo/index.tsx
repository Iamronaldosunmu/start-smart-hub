import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const clientLogo = () => {
	return (
		<div className="h-[200px] py-3">
				<Marquee speed={100} className="h-full flex space-x-5 items-center">
					<img className="object-cover py-2" src="public/assets/client1.png" alt="logo 1" />
					<img className="object-cover py-2" src="public/assets/client2.png" alt="logo 2" />
					<img className="object-fill py-2" src="public/assets/client3.png" alt="logo 3" />
					<img className="object-cover py-2" src="public/assets/client4.png" alt="logo 4" />
					<img className="object-cover py-2" src="public/assets/client5.png" alt="logo 5" />
				</Marquee>
		</div>
	);
};

export default clientLogo;
