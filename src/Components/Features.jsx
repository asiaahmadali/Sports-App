import FeatureCard from "./Feature-Card";
function FeatureCards() {
  //feature 1 details
  const h1 = "Interactive Data Visualisation";
  const p1 =
    "Dive into tailored visualisations and interactive dashboards for comprehensive finance data, sponsorship insights, and more. Gain actionable intelligence at a glance with customisable data views.";
  const img1src = "images/feature1-img.png";

  // feature 2 details

  const h2 = "Comprehensive Fianance Reports";
  const p2 =
    "Access detailed finance reports encompassing revenue, expenses, profit margins, transfer metrics, and squad finances. Perform informed financial analysis based on robust,analytics.";
  const img2src = "images/feature2-img.png";

  //   feature 3 details
  const h3 = "Sponsorship Intelligence";
  const p3 =
    "Uncover sponsorship trends, analyse sponsor categories, and gain valuable insights from sports teams' sponsorship deals. Harness powerful competitive intelligence to elevate your strategies. ";
  const img3src = "images/feature3-img.png";

  //
  return (
    <>
      <div className="bg-[#DDE1E6] flex flex-col items-center pt-[120px] md:pt-[250px] h-auto pb-[40px]">
        <div className="flex flex-col items-center">
          <button className="text-[#545FE8] border-[1px] p-1 border-blue-700 rounded-[40px] w-[150px] h-[32px] mb-3">
            Key Features
          </button>
          <h1 className="border-1 text-2xl font-[500] w-[250px] md:w-full text-center">
            Comprehensive Sports Business Intelligence
          </h1>
          <h4 className="h-[10px] text-sm md:text-xl font-[500] w-[300px] md:w-full text-center mt-3">
            Gain access to a diverse of finance and sponsership data from sports
            across the globe
          </h4>
        </div>

        {/* Features cards */}
        <div className="flex flex-col md:flex-row gap-4 mt-[70px] items-center">
          <FeatureCard heading={h1} para={p1} imgsrc={img1src}></FeatureCard>
          <FeatureCard heading={h2} para={p2} imgsrc={img2src}></FeatureCard>
          <FeatureCard heading={h3} para={p3} imgsrc={img3src}></FeatureCard>
        </div>
      </div>
    </>
  );
}

export default FeatureCards;
