const Footer = () => {
  const footerItems = [
    { label: 'MY STORY', link: '#' },
    { label: 'STORE', link: '#' },
    { label: 'FAQ', link: '#' },
    { label: 'EVENTS', link: '#' },
    { label: 'BLOG', link: '#' },
    { label: 'T&C', link: '#' },
    { label: 'PROGRAMS', link: '#' },
    { label: 'CONTACT', link: '#' },
  ];
  
  return (
    <div className="text-gray-400 large:p-20 p-5 flex flex-col">
      <footer className="large:grid large:grid-cols-3 sm:flex-row justify-between">
        <div className="hidden large:block w-full">
          <div className="mb-5">
            <img src="/src/assets/logo.svg" alt="logo" />
          </div>

          <div className="flex-shrink-0 sm:pr-10">
            <div className="hidden sm:block mb-3">support@acooper.com</div>
            <div className="hidden sm:block mb-3">(932) 490 9308</div>
            <div className="hidden sm:block">
              577 Taylor Lane Oakland, CA 94603
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="large:hidden inline mb-3 w-1/3">
            <img
              src="/src/assets/mobile-icon.png"
              className="justify-end"
              alt=""
            />
          </div>

          <div className="grid grid-cols-3 text-black text-xs mb-6 gap-10 xs:gap-5  sm:mb-0 sm:w-full items-start justify-end">
            {footerItems.map((item, index) => (
              <a href={item.link} className="hover:text-gray-400" key={index}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex mt-5 large:justify-start items-start justify-end">
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
      </footer>
    </div>
  );
};

export default Footer;
