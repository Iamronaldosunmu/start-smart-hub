const Footer = () => {
  const footerItems = [
    { label: "HOME", link: "#" },
    { label: "JOB APPLICATION", link: "#" },
    { label: "TERMS AND CONDITION", link: "#" },
    { label: "ABOUT", link: "#" },
    { label: "JOB SEARCH", link: "#" },
    { label: "CONTACT", link: "#" },
    { label: "SERVICES", link: "#" },
    { label: "EVENTS", link: "#" },
  ];

  return (
    <div className="text-gray-400 ">
      <div className="border border-black lg:mb-20 mb-10"></div>
      <footer className="flex flex-row lg:px-20 sm:px-10 px-5 lg:mb-16 mb-10">
        <div className=" mb-3 w-1/3">
          <img
            src="/src/assets/mobile-icon.png"
            className="justify-end"
            alt=""
          />
        </div>
        <div className="lg:flex">
          <div className="grid grid-cols-3 text-black text-xs mb-6   sm:mb-0 sm:w-full sm:gap-1 gap- items-start justify-end">
            {footerItems.map((item, index) => (
              <a
                href={item.link}
                className="hover:text-gray-400 mb-4 mr-4"
                key={index}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex mt-5 lg:justify-start items-start justify-center">
            <a href="">
              <img src="/src/assets/facebook.png" alt="" />
            </a>
            <a href="">
              <img src="/src/assets/twitter.png" alt="" />
            </a>
            <a href="">
              <img src="/src/assets/youtube.png" alt="" />
            </a>
            <a href="">
              <img src="/src/assets/instagram.png" alt="" />
            </a>
          </div>
        </div>
      </footer>
      <div className="flex justify-center items-center mb-5">
        <p className="text-xs text-center px-5">
          ©2021 Andrew Cooper International, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
