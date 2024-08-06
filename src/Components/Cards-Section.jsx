import Card from "./Card";

function CardSection() {
  // card1 details
  const h1 = "Select Your Team";
  const p1 =
    " Select a sports team from our expertise database to access comprehensive financial   metrices";
  const img1src = "images/card-icon-1.png";

  // card 2 details

  const h2 = "Explore Matrices";
  const p2 =
    " Select a sports team from our expertise database to access comprehensive financial metrices";
  const img2src = "images/card-icon-2.png";

  //   card 3 details
  const h3 = "Data-driven Insights";
  const p3 =
    "Select a sports team from our expertise database to access comprehensive financial metrices ";
  const img3src = "images/card-icon-3.png";

  //
  return (
    <>
      <div className="bg-[#DDE1E6] flex flex-col items-center pt-[120px] md:pt-[250px] h-auto">
        <div className="flex flex-col items-center">
          <button className="text-[#545FE8] border-[1px] p-1 border-blue-700 rounded-[40px] w-[150px] h-[32px] mb-3">
            how it works?
          </button>
          <h1 className="border-1 text-2xl font-[500] w-[250px] md:w-full text-center">
            Gain an Edge With Our Unique Data
          </h1>
          <h4 className="h-[10px] text-sm md:text-xl font-[500] w-[300px] md:w-full text-center mt-3">
            unlock team and lead matrics,and access data driven insights
          </h4>
        </div>

        {/* cards */}
        <div className="flex flex-col md:flex-row gap-4 mt-[70px] items-center">
          <Card heading={h1} para={p1} imgsrc={img1src}></Card>
          <Card heading={h2} para={p2} imgsrc={img2src}></Card>
          <Card heading={h3} para={p3} imgsrc={img3src}></Card>
        </div>
      </div>
    </>
  );
}

export default CardSection;
