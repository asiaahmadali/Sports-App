function FeatureCard(Props) {
  return (
    <>
      <div className=" w-[300px] h-max-[150px] flex flex-col gap-3 bg-[#FFFFFF] shadow-md shadow-gray-500">
        <img src={Props.imgsrc} alt="" className="w-[300px] h-[200px]" />
        <div className="p-[20px]  ">
          <h2 className="font-[500]">{Props.heading}</h2>
          <p className="text-sm mt-2">{Props.para}</p>
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
