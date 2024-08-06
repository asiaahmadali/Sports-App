function NewsCard(Props) {
  return (
    <>
      <div className=" w-[300px] h-[390px] p-[40px]  flex flex-col gap-3 bg-[#FFFFFF] shadow-md shadow-gray-500">
        <h1>{Props.mainHead}</h1>
        <h2 className="font-[500]">{Props.heading}</h2>
        <p className="text-sm mt-6">{Props.para}</p>
      </div>
    </>
  );
}

export default NewsCard;
