import { FC } from "react";
import "./HomeButton.scss";
import headerLogo from "../../assets/svg/header_logo.svg";
import burguerLogo from "../../assets/svg/burguer_logo.svg";
import { useMenuContext } from "../../data/MenuContext";
import { useNavigate } from 'react-router-dom';
import { HomeButtonProps } from "@/types/interfaces";


export const HomeButton: FC<HomeButtonProps> = ({ className = "" }) => {

  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate('/home');
  };

  const { isMenuOpen } = useMenuContext();

  return (
    <button
      className={`btn btn-light d-flex align-items-center ${className}`}
      onClick={redirectToHome}
    >
        <img
        className="home-icon"
        src={isMenuOpen ? burguerLogo : headerLogo}
        alt="Logo Empresa"
      />
    
    </button>
  );
};
