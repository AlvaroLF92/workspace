import { FC, useState } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { carouselData } from "../../components/Carousel/carouselData";
import { PreFooter } from "../../components/PreFooter/PreFooter";
import hotel from "../../assets/img/tours/icons/hotel.svg";
import tree from "../../assets/img/tours/icons/tree.png";
import ship from "../../assets/img/tours/icons/ship.png";
import water from "../../assets/img/tours/icons/water.png";
import tour1 from "../../assets/img/tours/images/1.jpg";
import tour2 from "../../assets/img/tours/images/2.jpg";
import tour3 from "../../assets/img/tours/images/3.jpg";
import tour4 from "../../assets/img/tours/images/4.jpg";
import "./tours.scss";
import { Trans, useTranslation } from "react-i18next";
import { Tour, TourId } from "@/types/interfaces";



export const Tours: FC = () => {
  useTranslation();
  const [selectedTour, setSelectedTour] = useState<TourId>("tour-1");

  const tours: Record<TourId, Tour> = {
    "tour-1": {
      name: "PANORAMIC_TOUR_LAS_PALMAS",
      description:
        "TOURS_PAGE.PANORAMIC_TOUR_LAS_PALMAS.DESCRIPTION",
      duration: "TOURS_PAGE.PANORAMIC_TOUR_LAS_PALMAS.DURATION",
      price: "TOURS_PAGE.PANORAMIC_TOUR_LAS_PALMAS.PRICE",
      stops: [
        "TOURS_PAGE.PANORAMIC_TOUR_LAS_PALMAS.STOPS.STOP_1",
        "TOURS_PAGE.PANORAMIC_TOUR_LAS_PALMAS.STOPS.STOP_2",
        "TOURS_PAGE.PANORAMIC_TOUR_LAS_PALMAS.STOPS.STOP_3",
      ],
      extras: [
        "TOURS_PAGE.PANORAMIC_TOUR_LAS_PALMAS.EXTRA.EXTRA_1",
        "TOURS_PAGE.PANORAMIC_TOUR_LAS_PALMAS.EXTRA.EXTRA_2",
      ],
      icon: hotel,
      image: tour1,
    },
    "tour-2": {
      name: "PANORAMIC_TOUR_AYAGAURES",
      description:
        "TOURS_PAGE.PANORAMIC_TOUR_AYAGAURES.DESCRIPTION",
      duration: "TOURS_PAGE.PANORAMIC_TOUR_AYAGAURES.DURATION",
      price: "TOURS_PAGE.PANORAMIC_TOUR_AYAGAURES.PRICE",
      stops: [
        "TOURS_PAGE.PANORAMIC_TOUR_AYAGAURES.STOPS.STOP_1",
        "TOURS_PAGE.PANORAMIC_TOUR_AYAGAURES.STOPS.STOP_2",
        "TOURS_PAGE.PANORAMIC_TOUR_AYAGAURES.STOPS.STOP_3",
      ],
      extras: [
        "TOURS_PAGE.PANORAMIC_TOUR_AYAGAURES.EXTRA.EXTRA_1",
        "TOURS_PAGE.PANORAMIC_TOUR_AYAGAURES.EXTRA.EXTRA_2",
      ],
      icon: tree,
      image: tour2,
    },
    "tour-3": {
      name: "TOUR_LAS_PLAYAS",
      description: "TOURS_PAGE.TOUR_LAS_PLAYAS.DESCRIPTION",
      duration: "TOURS_PAGE.TOUR_LAS_PLAYAS.DURATION",
      price: "TOURS_PAGE.TOUR_LAS_PLAYAS.PRICE",
      stops: [
        "TOURS_PAGE.TOUR_LAS_PLAYAS.STOPS.STOP_1",
        "TOURS_PAGE.TOUR_LAS_PLAYAS.STOPS.STOP_2",
        "TOURS_PAGE.TOUR_LAS_PLAYAS.STOPS.STOP_3",
      ],
      extras: [
        "TOURS_PAGE.TOUR_LAS_PLAYAS.EXTRA.EXTRA_1",
        "TOURS_PAGE.TOUR_LAS_PLAYAS.EXTRA.EXTRA_2",
      ],
      icon: ship,
      image: tour3,
    },
    "tour-4": {
      name: "COMBO",
      description: "TOURS_PAGE.COMBO.DESCRIPTION",
      duration: "TOURS_PAGE.COMBO.DURATION",
      price: "TOURS_PAGE.COMBO.PRICE",
      stops: [
        "TOURS_PAGE.COMBO.STOPS.STOP_1",
        "TOURS_PAGE.COMBO.STOPS.STOP_2",
        "TOURS_PAGE.COMBO.STOPS.STOP_3",
      ],
      extras: [
        "TOURS_PAGE.COMBO.EXTRA.EXTRA_1",
        "TOURS_PAGE.COMBO.EXTRA.EXTRA_2",
      ],
      icon: water,
      image: tour4,
    },
  };

  const handleTourNavigation = (tourId: string) => {
    if (
      tourId === "tour-1" ||
      tourId === "tour-2" ||
      tourId === "tour-3" ||
      tourId === "tour-4"
    ) {
      setSelectedTour(tourId as TourId);
    }
  };

  return (
    <>

      <Carousel images={carouselData.tours.images} />
      
      <h1 className="tours-title">
        <Trans i18nKey="TOURS_PAGE.TITLE" />
      </h1>

      <div className="tours-intro">
        <p>
          <Trans i18nKey="TOURS_PAGE.TEXT_1" />
        </p>
        <p>
          <Trans i18nKey="TOURS_PAGE.TEXT_2" />
        </p>
      </div>

      <div className="navigation-icons-container">
        <div
          className="arrow arrow-left"
          onClick={() => {
            const prevTourId =
              selectedTour === "tour-1"
                ? "tour-4"
                : `tour-${parseInt(selectedTour.split("-")[1]) - 1}`;
            handleTourNavigation(prevTourId);
          }}
        >
          ◀
        </div>

        {Object.entries(tours).map(([id, tour]) => (
          <div
            key={id}
            className={`navigation-icon ${
              selectedTour === id ? "selected" : ""
            }`}
            onClick={() => handleTourNavigation(id as TourId)}
          >
            <img src={tour.icon} alt={`icono ${id}`} className="icon" />
          </div>
        ))}

        <div
          className="arrow arrow-right"
          onClick={() => {
            const nextTourId =
              selectedTour === "tour-4"
                ? "tour-1"
                : `tour-${parseInt(selectedTour.split("-")[1]) + 1}`;
            handleTourNavigation(nextTourId);
          }}
        >
          ▶
        </div>
      </div>

      <div className="tour-card">
        <div className="tour-card__content">
          <div className="tour-card__image-container">
            <img
              src={tours[selectedTour].image}
              alt={`Imagen del ${selectedTour}`}
              className="tour-card__image"
            />
          </div>

          <div className="tour-card__text">
            <h2 className="tour-card__title">
              <img
                src={tours[selectedTour].icon}
                alt="icon"
                className="tour-card__icon"
              />
              <Trans
                i18nKey={`TOURS_PAGE.${tours[selectedTour].name}.NAME`}
              />
            </h2>

            <div className="tour-card__info">
              <p>
                <Trans i18nKey={tours[selectedTour].duration} />
              </p>
              <p>
                <Trans i18nKey={tours[selectedTour].price} />
              </p>

              <div>
                <p>
                  <Trans
                    i18nKey={`TOURS_PAGE.${tours[selectedTour].name}.STOPS.NAME`}
                  />
                </p>
                <ul className="tour-card__stops">
                  {tours[selectedTour].stops.map((stop, idx) => (
                    <li key={idx}>
                      <Trans i18nKey={stop} />
                    </li>
                  ))}
                </ul>
              </div>

              {selectedTour === "tour-1" && (
                <div>
                  <p>
                    <Trans
                      i18nKey={`TOURS_PAGE.${tours[selectedTour].name}.EXTRA.NAME`}
                    />
                  </p>
                  <ul className="tour-card__extras">
                    {tours[selectedTour].extras.map((extra, idx) => (
                      <li key={idx}>
                        <Trans i18nKey={extra} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="tour-card__description">
                <Trans i18nKey={tours[selectedTour].description} />
              </p>
            </div>
          </div>
        </div>
      </div>

      <PreFooter currentPage="TOURS_PAGE" />
    </>
  );
};
