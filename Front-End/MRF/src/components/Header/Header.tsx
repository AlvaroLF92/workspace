import { FC } from "react";
import { useMenuContext } from "../../data/MenuContext"; 
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { Navbar } from "../Navbar/Navbar";
import { Search } from "../Search/Search";
import { LanguageDropDown } from "../LanguageDropDown/LanguageDropDown";
import { HomeButton } from "../HomeButton/HomeButton";
import "./Header.scss";

export const Header: FC = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext(); 

  return (
    <>
      <div className="header-container">
        <div className="social-media-container">
          <SocialMedia inHeader={true} />
        </div>
        <div className="navbar-container">
          <HomeButton />
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <div className="side-menu">
            <Search />
            <LanguageDropDown />
          </div>

          <button
            className="navbar navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </>
  );
};
