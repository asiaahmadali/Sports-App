function Header() {
  return (
    <>
      <div className="w-full bg-[url('images/bg.png')] bg-cover bg-no-repeat h-[587px] bg-[#23244c] text-white flex flex-col items-center pt-[100px]">
        <div className="flex flex-col items-center">
          <h1 className="border-1 text-2xl md:text-3xl font-[500] w-[200px] md:w-full">
            Unlock Sports Finance Data
          </h1>
          <p className="text-sm md:text-xl font-[300] w-[200px] md:w-full mt-3">
            Reliable sports financial data across 1,000+ teams and league
          </p>
          <div className="flex border-1 mt-3 text-sm p-4 ">
            <input
              type="text"
              placeholder="search for Team or League"
              className="outline-none text-gray-500 p-2 w-[200px] md:w-[400px]"
            />
            <div className="flex bg-blue-600 items-center w-[90px]">
              <button className="ml-2 p-2">Search</button>
              <img src="images/search-icon.png" alt="" className="w-[30px]" />
            </div>
          </div>
        </div>

        <div>
          <img
            src="images/graph.png"
            alt=""
            className="w-[300px] h-[300px] md:w-[794px] md:h-[495px] mt-[100px]"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
