import logo from "../../assets/images/logo.svg";
import unitsIcon from "../../assets/images/icon-units.svg";
import dropDownIcon from "../../assets/images/icon-dropdown.svg";

const CustomHeader = () => {
  return (
    <header className="flex  xl:px-28 backdrop-blur-md justify-between items-center text-neutral-0 font-dm-sans">
      <img
        src={logo}
        alt="logo"
      />
      <button className="flex xl:gap-2.5 gap-1.5 bg-neutral-800 py-2 px-2.5 xl:py-3 xl:px-4 rounded-lg cursor-pointer">
        <img
          src={unitsIcon}
          alt="units"
        />
        <span className="text-[16px]/[1.2] font-medium">Units</span>
        <img
          src={dropDownIcon}
          alt="drop down"
        />
      </button>
    </header>
  );
};

export default CustomHeader;
