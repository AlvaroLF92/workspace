import React, { useState, useEffect } from "react";
import "./GalleryComponent.scss";
import { useTranslation } from "react-i18next";
import { GalleryImage } from "@/types/interfaces";



export const GalleryComponent: React.FC = () => {
  useTranslation();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const imageModules = import.meta.glob(
      "../../assets/img/mission/gallery/*.{png,jpg,jpeg,gif}"
    );
    const loadedImages: GalleryImage[] = Object.keys(imageModules).map(
      (path) => ({
        src: path.replace("../../assets", "./assets"), // Ajusta la ruta para el navegador
        thumb: path.replace("../../assets", "./assets"), // Miniatura
        alt: path.split("/").pop() || "Image",
      })
    );
    setImages(loadedImages);
  }, []);

  const changeImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openImage = (src: string) => {
    window.open(src, "_blank")
  }

  const getThumbnailImages = () => {
    const prevPrevIndex =
      (currentImageIndex - 2 + images.length) % images.length;
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    const nextIndex = (currentImageIndex + 1) % images.length;
    const nextNextIndex = (currentImageIndex + 2) % images.length;
    return [
      prevPrevIndex,
      prevIndex,
      currentImageIndex,
      nextIndex,
      nextNextIndex,
    ];
  };

  const [prevPrevIndex, prevIndex, currentIndex, nextIndex, nextNextIndex] =
    getThumbnailImages();

  return (
    <div className="gallery-container">
      <div className="thumbnail-container">
        <div className="thumbnails">
          <div
            className="thumbnail"
            onClick={() => changeImage(prevPrevIndex)}
          >
            <img
              src={images[prevPrevIndex]?.thumb}
              alt={images[prevPrevIndex]?.alt}
            />
          </div>

          <div className="thumbnail" onClick={() => changeImage(prevIndex)}>
            <img
              src={images[prevIndex]?.thumb}
              alt={images[prevIndex]?.alt}
            />
          </div>

          <div
            className="thumbnail active"
            onClick={() => changeImage(currentIndex)}
          >
            <img
              src={images[currentIndex]?.thumb}
              alt={images[currentIndex]?.alt}
            />
          </div>

          <div className="thumbnail" onClick={() => changeImage(nextIndex)}>
            <img
              src={images[nextIndex]?.thumb}
              alt={images[nextIndex]?.alt}
            />
          </div>

          <div
            className="thumbnail"
            onClick={() => changeImage(nextNextIndex)}
          >
            <img
              src={images[nextNextIndex]?.thumb}
              alt={images[nextNextIndex]?.alt}
            />
          </div>
        </div>
      </div>
    <div className="image-container">
      <img
        src={images[currentImageIndex]?.src}
        alt={images[currentImageIndex]?.alt}
        className="current-image"
        onClick={()=>openImage(images[currentImageIndex]?.src)}
      />
    </div>
    </div>
  );
};
