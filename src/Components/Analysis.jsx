import FeatureCard from "./Feature-Card";
import NewsCard from "./News-card";

function Analysis() {
  // card1 details
  const h1 = "Ford's relationship with Red Bull should worry their US rivals";
  const p1 =
    "Fall comes after food delivery company priced its shares at bottom end of range";
  const img1src = "";
  const head = "Featured";

  // card 2 details

  const h2 = "Premier League vows stronger crackdown on illegal streaming";
  const para =
    "As the world's richest football competition prepares for a multibillion-pound auction of domestic television rights...";
  const img2src = "images/anal-img1.png";

  //   card 3 details
  const h3 = "Miami firm 777 Partners agrees to buy Everton Football Club";
  const img3src = "images/anal-img2.png";

  //   card 4 details
  const h4 = "Manchester United cuts profit forecast after Champions League ";
  const img4src = "images/anal-img3.png";

  //   card 5 details
  const h5 = "Man City reports record £712mn Premier League revenue";
  const img5src = "images/anal-img4.png";

  //   card 6 details
  const h6 = "Deliveroo narrows IPO pricing at lower end of earlier target";
  const img6src = "images/anal-img5.png";

  //
  return (
    <>
      <div className="bg-[#F2F4F8] flex flex-col items-center pt-[90px] md:pt-[100px] h-auto pb-4">
        <div className="flex flex-col items-center">
          <button className="text-[#545FE8] border-[1px] p-1 border-blue-700 rounded-[40px] w-[150px] h-[32px] mb-3">
            News & Analysis
          </button>
          <h1 className="border-1 text-2xl font-[500] w-[250px] md:w-full text-center">
            Stay Informed with Data Driven Analysis
          </h1>
          <h4 className="h-[10px] text-sm md:text-xl font-[500] w-[300px] md:w-full text-center mt-3">
            Expert new analysis for informed Insights
          </h4>
        </div>

        {/* cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[70px] items-center w-[90%]">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <img
              src="images/anal-main-img.png"
              alt="main-image"
              className="w-full h-[390px]"
            />
          </div>
          <NewsCard
            heading={h1}
            para={p1}
            imgsrc={img1src}
            mainHead={head}
          ></NewsCard>
          <FeatureCard heading={h2} para={para} imgsrc={img2src}></FeatureCard>
          <FeatureCard heading={h3} para={para} imgsrc={img3src}></FeatureCard>
          <FeatureCard heading={h4} para={para} imgsrc={img4src}></FeatureCard>
          <FeatureCard heading={h5} para={para} imgsrc={img5src}></FeatureCard>
          <FeatureCard heading={h6} para={para} imgsrc={img6src}></FeatureCard>
        </div>
        {/* more btn */}
        <div className="text-[#545FE8] border-[1px] border-blue-700 pl-4 pr-4 text-center mt-6  h-[32px] mb-3 flex gap-2">
          <button className="">Explore More News & Analysis</button>
          <img src="images/arrow.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Analysis;
