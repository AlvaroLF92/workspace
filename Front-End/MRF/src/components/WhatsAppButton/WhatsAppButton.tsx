import { FC } from "react";
import "./WhatsAppButton.scss";
import whatsappIcon from "../../assets/svg/whatsapp.svg";

export const WhatsAppButton: FC = () => {
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send?phone=34651651341", "_blank");
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </button>
  );
};
