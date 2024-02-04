// import React from "react";
// import { motion } from "framer-motion";
// import Marquee from "react-fast-marquee";

// const clientLogo = () => {
// 	return (
// 		<div className="h-[200px] py-3">
// 				<Marquee speed={100} className="h-full flex space-x-5 items-center w-50" gradient={true}>
// 					<img className="object-cover py-2" src="public/assets/client1.png" alt="logo 1" />
// 					<img className="object-cover py-2" src="public/assets/client2.png" alt="logo 2" />
// 					<img className="object-fill py-2" src="public/assets/client3.png" alt="logo 3" />
// 					<img className="object-cover py-2" src="public/assets/client4.png" alt="logo 4" />
// 					<img className="object-cover py-2" src="public/assets/client5.png" alt="logo 5" />
// 				</Marquee>
// 		</div>
// 	);
// };

// export default clientLogo;

import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Container from "../container";
const ClientLogo = () => {
	return (
		<Container className="mt-[70px] mb-[175px]">
			<div className="h-[175px] pt-8">
				<p className="text-[40px] text-center font-medium flex [&>*:not(:last-child)]:mr-2 flex-wrap justify-center mb-[40px]">Our Clients</p>
				<Marquee
					speed={100}
					className="h-full flex space-x-5 items-center w-50"
					gradient={true}
				>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client1.png"
						alt="logo 1"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client2.png"
						alt="logo 2"
					/>
					<img
						className="object-fill py-2 h-24 mr-10"
						src="/assets/client3.png"
						alt="logo 3"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client4.png"
						alt="logo 4"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client5.png"
						alt="logo 5"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client6.png"
						alt="logo 6"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client1.png"
						alt="logo 1"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client2.png"
						alt="logo 2"
					/>
					<img
						className="object-fill py-2 h-24 mr-10"
						src="/assets/client3.png"
						alt="logo 3"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client4.png"
						alt="logo 4"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client5.png"
						alt="logo 5"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client6.png"
						alt="logo 6"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client1.png"
						alt="logo 1"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client2.png"
						alt="logo 2"
					/>
					<img
						className="object-fill py-2 h-24 mr-10"
						src="/assets/client3.png"
						alt="logo 3"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client4.png"
						alt="logo 4"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client5.png"
						alt="logo 5"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client6.png"
						alt="logo 6"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client1.png"
						alt="logo 1"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client2.png"
						alt="logo 2"
					/>
					<img
						className="object-fill py-2 h-24 mr-10"
						src="/assets/client3.png"
						alt="logo 3"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client4.png"
						alt="logo 4"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client5.png"
						alt="logo 5"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client6.png"
						alt="logo 6"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client1.png"
						alt="logo 1"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client2.png"
						alt="logo 2"
					/>
					<img
						className="object-fill py-2 h-24 mr-10"
						src="/assets/client3.png"
						alt="logo 3"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client4.png"
						alt="logo 4"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client5.png"
						alt="logo 5"
					/>
					<img
						className="object-cover py-2 h-24 mr-10"
						src="/assets/client6.png"
						alt="logo 6"
					/>
				</Marquee>
			</div>
		</Container>
	);
};

export default ClientLogo;
