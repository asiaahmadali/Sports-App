function DataFigures() {
  return (
    <>
      <div className="flex bg-[#23254C] justify-around items-center gap-[50px] text-white p-[50px] flex-col md:flex-row">
        <div className="flex flex-col items-center md:items-start gap-2">
          <button className="border-[1px] p-1 border-white rounded-[40px] w-[150px] h-[32px] mb-3">
            Explore our data
          </button>
          <h1 className="border-1 text-xl font-[500]  text-center">
            Premier League Finance Dashboards
          </h1>
          <h4 className="h-[10px] text-sm  font-[500]   text-center mt-1">
            Gain exclusive access to comprehensive financial data and key
            metrics for Premier League clubs.
          </h4>
          <button className="text-center p-2 bg-blue-800  mt-[75px] md:mt-[40px]">
            Access Data
          </button>
        </div>
        {/* figure */}
        <div>
          <img src="images/figure.png" alt="" className="" />
        </div>
      </div>
    </>
  );
}

export default DataFigures;
