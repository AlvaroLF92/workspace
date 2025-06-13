import { FC, useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import "./TextImage.scss";
import { TextImageProps } from "@/types/interfaces";


export const TextImage: FC<TextImageProps> = ({
  textKeys,
  imageSrc,
  layout,
}) => {
  useTranslation();

  const [currentLayout, setCurrentLayout] = useState(layout);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setCurrentLayout("text-bottom");
      } else {
        setCurrentLayout(layout);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [layout]);

  return (
    <div className={`text-image ${currentLayout}`}>
      <div className="text-content">
        {textKeys.map((key, index) => (
          <p key={index}>
            <Trans i18nKey={key} />
          </p>
        ))}
      </div>
      <div className="image-content">
        <img src={imageSrc} alt="Image related to text" />
      </div>
    </div>
  );
};
