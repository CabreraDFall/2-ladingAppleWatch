import React from "react";
import { FaAward } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";

function Icons() {
  const iconLists = [
    {
      id: 1,
      icon: <FaAward size={"2rem"} color="#0ea5e9" />,
      num: "220",
      title: "Awards",
      desc: "Lorem Ipsum text non generic",
      color: "bg-sky-500/20",
    },
    {
      id: 2,
      icon: <BsBoxSeam size={"2rem"} color="#fb2f29" />,
      num: "35K",
      title: "Worldwide Shipping",
      desc: "Lorem Ipsum text non generic",
      color: "bg-[#fb2f29]/20",
    },
    {
      id: 3,
      icon: <TbTruckReturn size={"2.5rem"} color="#4c9f00" />,
      num: "35K",
      title: "Free Returns",
      desc: "Lorem Ipsum text non generic",
      color: "bg-[#4c9f00]/20",
    },
  ];

  return (
    <div className="icons flex flex-col md:flex-row">
      {iconLists.map((iconList, index) => (
        <div
          key={index}
          className="icon md:flex-1 flex flex-row gap-5 justify-start pl-[2rem] md:pl-0  md:justify-center   items-center py-[2.5rem] my-5 shadow-lg
          md:gap-3 
          
          "
        >
          <div
            key={index}
            className={`iconSvg w-[3rem] h-[3rem] flex justify-center items-center ${iconList.color}`}
          >
            {iconList.icon}
          </div>

          <div className="text">
            <div className="flex gap-2 items-center">
              <span className="font-bold">{iconList.num}+</span>
              <span className="font-semibold">{iconList.title}</span>
            </div>
            <span className="text-[0.75rem]">{iconList.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Icons;
