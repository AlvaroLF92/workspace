import { pages } from "../../data/pages";
import { useTranslation } from "react-i18next";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { HomeButton } from "../HomeButton/HomeButton";
import { DropDown } from "../DropDown/DropDown";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { NavbarProps } from "@/types/interfaces";


export const Navbar = ({ isMenuOpen, toggleMenu }: NavbarProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const servicesOptions = [
    { label: t("MENU.TOURS"), value: "tours" },
    { label: t("MENU.RENTALS"), value: "rentals" },
  ];

  const checkAndCloseMenu = () => {
    if (isMenuOpen) toggleMenu();
  };
  const handleServiceSelection = (selectedOption: {
    label: string;
    value: string;
  }) => {
    switch (selectedOption.value) {
      case "tours":
        navigate("/tours");
        break;
      case "rentals":
        navigate("/rentals");
        break;

      default:
        console.warn("Opción no reconocida:", selectedOption.value);
    }
    checkAndCloseMenu();
  };

  const handleLinkClick = (link: string) => {
    navigate(link);
    checkAndCloseMenu();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <button className="close-btn" onClick={toggleMenu}>
            &times;
          </button>

          <div className="navbar-extra">
            <HomeButton className="navbar-home-button" />
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/home"
                onClick={() => handleLinkClick("/home")}
              >
                {t(pages.home.dictionaryLabel())}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/our_mission"
                onClick={() => handleLinkClick("/our_mission")}
              >
                {t(pages.ourMission.dictionaryLabel())}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown-service">
                <div className="dropdown dropdown-service-menu">
                  <DropDown
                    options={servicesOptions}
                    onChange={handleServiceSelection}
                    placeholder={t("MENU.SERVICES")}
                  />
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/sales"
                onClick={() => handleLinkClick("/sales")}
              >
                {t(pages.sales.dictionaryLabel())}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={() => handleLinkClick("/contact")}
              >
                {t(pages.contact.dictionaryLabel())}
              </Link>
            </li>
          </ul>

          <div className="navbar-extra">
            <SocialMedia className="navbar-social-media" />
          </div>
        </div>
      </div>
    </nav>
  );
};
