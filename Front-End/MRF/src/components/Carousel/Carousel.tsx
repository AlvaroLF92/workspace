import { FC, useEffect, useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import "./carousel.scss";
import { CarouselProps } from "@/types/interfaces";


export const Carousel: FC<CarouselProps> = ({ images }) => {
  useTranslation();

  
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    
    if (carouselRef.current) {
    
      const carousel = new window.bootstrap.Carousel(carouselRef.current);
      carousel.cycle(); 
    }
  }, []); 

  return (
    <div className="custom-carousel-container">
      <div
        ref={carouselRef} 
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="carousel-image-wrapper">
                <img
                  src={image.src}
                  className="carousel-image"
                  alt={`Slide ${index + 1}`}
                />
              </div>
              <div className="carousel-caption">
                {image.texts.map((textKey, textIndex) => (
                  <p key={textIndex}>
                    <Trans
                      i18nKey={textKey}
                      components={{ strong: <strong /> }}
                    />
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
