function DashBoard() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#DDE1E6] h-auto pt-[90px] md:pt-[100px]">
        <button className="text-[#545FE8] border-[1px] border-blue-700 p-1 rounded-[40px] w-[150px] h-[32px] mb-3">
          Intuitive Dashboard
        </button>
        <h1 className="border-1 text-2xl font-[500] w-[250px] md:w-full text-center">
          Unlock the Potential of Data-driven Insights
        </h1>
        <h4 className="h-[10px] text-sm font-[500] w-[300px] md:w-full text-center mt-3">
          Unrivalled Sports finance Dashboards
        </h4>

        <img
          src="images/graph-2.png"
          alt=""
          className="w-[300px] md:w-[613px] rounded-[4px] relative top-[100px] md:top-[130px]"
        />
        <div className="w-full h-[200px] md:h-[400px] bg-[url('images/bg.png')] bg-cover bg-[#23254c]"></div>
      </div>
    </>
  );
}

export default DashBoard;
