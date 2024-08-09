function Footer() {
  return (
    <>
      <div className="w-full bg-[url('images/bg.png')] bg-[#000000] p-[50px] flex flex-col justify-around text-white gap-[20px]">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          {/* foxhams */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-2 items-center">
              <img
                src="images/logo.png"
                alt=""
                className="w-[28.46px] h-[28.46px] "
              />
              <h1 className="text-3xl">Foxhams</h1>
            </div>

            <div className="flex gap-[25px] md:gap-[80px] mt-[10px] md:mt-[20px]">
              <div>
                {/* support */}
                <h2 className="font-medium text-xl mb-4">Support</h2>
                <ul className="flex flex-col gap-1">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Accessibility</li>
                  <li>Access our Data</li>
                  <li>Request a Demo</li>
                </ul>
              </div>
              {/* legal & privacy */}
              <div>
                <h2 className="font-medium text-xl mb-4">Legal & Privacy</h2>
                <ul className="flex flex-col gap-1">
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Cookies</li>
                  <li>Equality Policy</li>
                  <li>Editorial Code</li>
                </ul>
              </div>
            </div>
          </div>
          {/* social media plateforms */}
          <div className="flex flex-col gap-4 text-white items-start">
            <div className="flex gap-4">
              <img src="images/linkedin.png" alt="linkedin" />
              <img src="images/Facebook.png" alt="facebook" />
              <img src="images/twitter.png" alt="twitter" />
              <img src="images/instagram.png" alt="instagram" />
            </div>
            <div>
              <p className="font-medium">Join our Press-only Newsletter</p>
            </div>
            <div className="w-[300px] flex">
              <input
                type="email"
                placeholder="Email.."
                className="p-2 outline-none text-gray-600"
              />
              <button className="bg-blue-600 p-2">Subscribe</button>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="md:ml-[150px] mt-[50px]">
          &copy; 2024 Foxhams.All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
