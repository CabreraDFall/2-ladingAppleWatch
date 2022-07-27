import { React } from "react";
import Menu from "./Menu";

function Header() {
  return (
    <div className="flex relative">
      <div className="wrapper  fixed z-[20]  w-[99%] h-[5rem] top-0 left-0 bg-white/20  backdrop-blur-lg">
        <div className="flex-1 font-bold text-[2rem] py-[1.5rem] pl-[3rem] md:pl-[6rem]">
          Fall
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
