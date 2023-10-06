const FormFooter = () => {
	return (
		<div className="mt-4">
			<div className="flex justify-between lg:text-sm max-w-full text-xs  flex-wrap  gap-y-5">
				<div className="flex sm:mr-7">
					<div className="flex justify-center flex-shrink-0 items-center mr-2 ">
						<img
							src="/assets/phone.svg"
							className="flex-shrink-0 lg:h-10 w-full object-cover"
							alt=""
						/>
					</div>
					<div>
						<p>PHONE</p>
						<p className="text-[#DD5471] whitespace-nowrap">03 5432 1234</p>
					</div>
				</div>
				<div className="flex mr-7">
					<div className="flex justify-center items-center mr-2 flex-shrink-0 ">
						<img
							src="/assets/fax.svg"
							className=" lg:h-10 w-full object-cover"
							alt=""
						/>
					</div>
					<div>
						<p>FAX</p>
						<p className="text-[#DD5471] whitespace-nowrap">03 5432 1234</p>
					</div>
				</div>
				<div className="flex ">
					<div className="flex justify-center items-center mr-2 flex-shrink-0">
						<img
							src="/assets/mail.svg"
							className=" lg:h-10 w-full object-cover"
							alt=""
						/>
					</div>
					<div className="flex flex-col flex-wrap">
						<p>EMAIL</p>
						<p className="text-[#DD5471]">info@marcc.com.au</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormFooter;
