import { MdMenu } from "react-icons/md";
function NavBar() {
  return (
    <>
      <div className="flex justify-between items-center bg-[#23254c] p-3 text-white w-full overflow-hidden fixed z-10">
        {/* site icon */}
        <div className="flex justify-between gap-8 items-center">
          <div className="flex gap-[30px] items-center">
            <MdMenu className=" block md:hidden text-3xl"></MdMenu>
            <div className="flex gap-2 items-center">
              <img
                src="images/logo.png"
                alt=""
                className="w-[28.46px] h-[28.46px] "
              />
              <h1 className="text-3xl">Foxhams</h1>
            </div>
          </div>

          {/* nav links */}

          <div className="hidden lg:block">
            <nav>
              <ul className="flex gap-5">
                <li className="cursor-pointer">Plateform</li>
                <li className="cursor-pointer">Features</li>
                <li className="cursor-pointer">News & Analysis</li>
                <li className="cursor-pointer">Access our Data</li>
              </ul>
            </nav>
          </div>
        </div>

        {/* profile */}
        <div>
          <div className="flex gap-3 items-center ">
            <img
              src="images/search-icon.png"
              alt=""
              className="w-[40px] h-[40px] "
            />
            <h4 className="text-xl hidden md:block">Sign in</h4>
            <button className="bg-blue-700 p-2 cursor-poiter hidden md:block">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
