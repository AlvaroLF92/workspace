import { FC } from "react";
import FacebookIcon from "../../assets/svg/facebook.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";
import YouTubeIcon from "../../assets/svg/youtube.svg";
import "./SocialMedia.scss";
import { SocialMediaProps } from "@/types/interfaces";



export const SocialMedia: FC<SocialMediaProps> = ({ className = "", inHeader = false }) => {
  const socialLinks = {
    facebook:
      "https://www.facebook.com/people/Motion-Rent-and-Fun/100092755172560/",
    instagram:
      "https://www.instagram.com/motion_rentandfun/?igsh=MXYwdnNkNHEydWNpaA%3D%3D",
    youtube: "https://www.youtube.com/@motionrentandfun",
  };

  const handleMailClick = () => {
    window.location.href = "mailto:info@motionrentandfun.com";
  };

  const handlePhoneClick = () => {
    window.open("https://wa.me/34651651341", "_blank"); 
  };

  return (
    <div className={`social-media ${className}`}>
      {inHeader && (
        <div className="mail-redirect" onClick={handleMailClick}>
          <a>info@motionrentandfun.com</a>
        </div>
      )}

      <ul className="social-media-list">
        <li>
          <button
            onClick={() => window.open(socialLinks.facebook, "_blank")}
            aria-label="Facebook"
            className="social-media-button"
          >
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="social-media-icon"
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => window.open(socialLinks.instagram, "_blank")}
            aria-label="Instagram"
            className="social-media-button"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="social-media-icon"
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => window.open(socialLinks.youtube, "_blank")}
            aria-label="YouTube"
            className="social-media-button"
          >
            <img
              src={YouTubeIcon}
              alt="YouTube"
              className="social-media-icon"
            />
          </button>
        </li>
      </ul>

      {inHeader && (
        <div className="phone-redirect" onClick={handlePhoneClick}>
          <a>+ 34 651 651 341</a>
        </div>
      )}
    </div>
  );
};
