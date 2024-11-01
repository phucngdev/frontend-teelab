import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../public/logo.png";
import { useLanguage } from "../../../providers/LanguageProvider";

const MainNavigate = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="hidden md:block container mx-auto">
        <ul className="flex justify-evenly items-center uppercase h-[77px] border-b-[1px] border-solid border-gray-300 md:text-sm lg:text-base">
          <li>
            <Link to="/">{language.navigate.home}</Link>
          </li>
          <li>
            <Link to="/chinh-sach-doi-tra">
              {language.navigate.returnPolicy}
            </Link>
          </li>
          <li className="md:w-[160px] lg:w-[200px]">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/bang-size">{language.navigate.sizeChart}</Link>
          </li>
          <li>
            <Link to="/he-thong-cua-hang">
              {language.navigate.storeLocations}
            </Link>
          </li>
        </ul>
        {/* <NavHeader /> */}
      </div>
    </>
  );
};

export default MainNavigate;
