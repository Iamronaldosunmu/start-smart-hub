
const ContactUsFooter = () => {
  return (
    <div>
        <div className="border border-black w-full mb-10"></div>

        <div className="px-40">
            <p className="mb-10 text-xs text-custom-purple">©2023 Yourcompany</p>

            <div className="border border-gray-400 mb-4"></div>
            <div className="flex justify-between">
                <div className="flex justify-between w-1/4">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div className="flex">
                    <a href="#" target="_blank">
                        <img src="/src/assets/facebook.png" alt="" />
                    </a>
                    <a href="#" target="_blank">
                        <img src="/src/assets/linkedIn.png" className="flex items-center justify-center w-4 mt-2.5 mr-7" alt="" />
                    </a>
        
                    <a href="#" target="_blank">
                        <img src="/src/assets/twitter.png" alt="" />
                    </a>
                    <a href="#" target="_blank">
                        <img src="/src/assets/youtube.png" alt="" />
                    </a>
                    <a href="#" target="_blank">
                        <img src="/src/assets/instagram.png" alt="" />
                    </a>

                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default ContactUsFooter
