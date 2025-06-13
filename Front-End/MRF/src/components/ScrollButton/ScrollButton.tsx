import { FC, useState, useEffect } from "react";
import { useMenuContext } from "../../data/MenuContext";
import PhoneIcon from "../../assets/img/home/item_image_6.webp";
import "./ScrollButton.scss";

export const ScrollButton: FC = () => {
  const { isMenuOpen } = useMenuContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (!isMenuOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const handleClick = () => {
    if (isMenuOpen) {
      window.location.href = "tel:+34651651341";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      className={`scroll-to-top-button ${
        isVisible || isMenuOpen ? "" : "hidden"
      } ${isMenuOpen ? "menu-open" : "menu-closed"}`}
      onClick={handleClick}
      aria-label={isMenuOpen ? "Call us" : "Scroll to top"}
    >
      {isMenuOpen ? (
        <img src={PhoneIcon} alt="Call us" width="24" height="24" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="6" y1="18" x2="12" y2="12" />
          <line x1="18" y1="18" x2="12" y2="12" />
        </svg>
      )}
    </button>
  );
};
