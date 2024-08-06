function Card(Props) {
  return (
    <>
      <div className=" w-[300px] h-max-[190px] p-[40px]  flex flex-col gap-3 bg-[#FFFFFF] shadow-md shadow-gray-500">
        <img
          src={Props.imgsrc}
          alt=""
          className="w-[70px] h-[70px] rounded-[8px]"
        />
        <h2 className="font-[500]">{Props.heading}</h2>
        <p className="text-sm">{Props.para}</p>
      </div>
    </>
  );
}

export default Card;
