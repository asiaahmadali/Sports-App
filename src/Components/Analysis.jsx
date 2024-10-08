import FeatureCard from "./Feature-Card";
import NewsCard from "./News-card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Analysis() {
  // card details
  const h1 = "Ford's relationship with Red Bull should worry their US rivals";
  const p1 =
    "Fall comes after food delivery company priced its shares at bottom end of range";
  const img1src = "";
  const head = "Featured";

  const h2 = "Premier League vows stronger crackdown on illegal streaming";
  const para =
    "As the world's richest football competition prepares for a multibillion-pound auction of domestic television rights...";
  const img2src = "images/anal-img1.png";

  const h3 = "Miami firm 777 Partners agrees to buy Everton Football Club";
  const img3src = "images/anal-img2.png";

  const h4 = "Manchester United cuts profit forecast after Champions ";
  const img4src = "images/anal-img3.png";

  const h5 = "Man City reports record £712mn Premier League revenue";
  const img5src = "images/anal-img4.png";

  const h6 = "Deliveroo narrows IPO pricing at lower end of earlier target";
  const img6src = "images/anal-img5.png";

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

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[70px] place-items-center w-full md:w-[90%]">
          {/* first row */}
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
        </div>

        {/* Slider */}
        <div className="mt-8 w-full md:w-[90%]">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            breakpoints={{
              450: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <FeatureCard
                heading={h3}
                para={para}
                imgsrc={img3src}
              ></FeatureCard>
            </SwiperSlide>
            <SwiperSlide>
              <FeatureCard
                heading={h4}
                para={para}
                imgsrc={img4src}
              ></FeatureCard>
            </SwiperSlide>
            <SwiperSlide>
              <FeatureCard
                heading={h5}
                para={para}
                imgsrc={img5src}
              ></FeatureCard>
            </SwiperSlide>
            <SwiperSlide>
              <FeatureCard
                heading={h6}
                para={para}
                imgsrc={img6src}
              ></FeatureCard>
            </SwiperSlide>
            <SwiperSlide>
              <FeatureCard
                heading={h3}
                para={para}
                imgsrc={img3src}
              ></FeatureCard>
            </SwiperSlide>
            <SwiperSlide>
              <FeatureCard
                heading={h4}
                para={para}
                imgsrc={img4src}
              ></FeatureCard>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* More button */}
        <div className="text-[#545FE8] border-[1px] border-blue-700 pl-4 pr-4 text-center mt-6 h-[32px] mb-3 flex gap-2">
          <button className="">Explore More News & Analysis</button>
          <img src="images/arrow.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Analysis;
