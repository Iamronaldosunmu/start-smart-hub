const FormFooter = () => {
	return (
		<div className="mt-4 font-poppins">
			<div className="flex justify-between lg:text-sm max-w-full text-xs  flex-wrap  gap-y-5">
				<div className="flex sm:mr-7">
					<div className="flex justify-center flex-shrink-0 items-center mr-2 ">
						<img
							src="/assets/phone.svg"
							className="w-7 h-7 object-cover"
							alt=""
						/>
					</div>
					<div>
						<p>PHONE</p>
						<p className="text-[#DD5471] whitespace-nowrap">+1 4379747631</p>
					</div>
				</div>
				{/* <div className="flex mr-7">
					<div className="flex justify-center items-center mr-2 flex-shrink-0 ">
						<img
							src="/assets/fax.svg"
							className=" w-7 h-7 object-cover"
							alt=""
						/>
					</div>
					<div>
						<p>FAX</p>
						<p className="text-[#DD5471] whitespace-nowrap">03 5432 1234</p>
					</div>
				</div> */}
				<div className="flex ">
					<div className="flex justify-center items-center mr-2 flex-shrink-0">
						<img
							src="/assets/mail.svg"
							className="w-7 h-7	 object-cover"
							alt=""
						/>
					</div>
					<div className="flex flex-col flex-wrap">
						<p>EMAIL</p>
						<p className="text-[#DD5471]">info@startsmarthub.ca</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormFooter;
