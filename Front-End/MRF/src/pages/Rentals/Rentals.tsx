import { FC, useState } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { carouselData } from "../../components/Carousel/carouselData";
import { PreFooter } from "../../components/PreFooter/PreFooter";
import { t } from "i18next";
import { Trans, useTranslation } from "react-i18next";
import "./rentals.scss";
import { ListItem } from "@/types/interfaces";


export const Rentals: FC = () => {
  useTranslation();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleForm = () => {
    console.log("Opening Form");
  };

  const infoItems = [
    "RENTALS_PAGE.SHOW_ELECTRIC",
    "RENTALS_PAGE.SHOW_BATTERY",
    "RENTALS_PAGE.SHOW_AUTONOMY",
  ];

  const items: ListItem[] = [
    { textKey: "RENTALS_PAGE.ELECTRIC" },
    { textKey: "RENTALS_PAGE.NOISE" },
    { textKey: "RENTALS_PAGE.POLLUTION" },
    { textKey: "RENTALS_PAGE.VIBRATION" },
    { textKey: "RENTALS_PAGE.BURN" },
  ];

  const translations = [
    { key: "HOME_PAGE.1DAY", subKey: "HOME_PAGE.1DAY_SUBTEXT" },
    { key: "HOME_PAGE.2DAYS", subKey: "HOME_PAGE.2DAY_SUBTEXT" },
    { key: "HOME_PAGE.3DAYS", subKey: "HOME_PAGE.3DAY_SUBTEXT" },
  ];

  return (
    <>
      <Carousel images={carouselData.rentals.images} />
      <div className="info-section">
        <p className="title">
          <Trans
            i18nKey="RENTALS_PAGE.SCOOTER"
            values={{ model: "Fauro Venice" }}
            components={{ strong: <strong style={{ color: "#9cc31c" }} /> }}
          />
        </p>
        <p className="info-title">{t("RENTALS_PAGE.RENT_LINE_1")}</p>
        <p className="license-warning">
          <img
            src="./assets/svg/exclamation.svg"
            alt="Exclamation icon"
            className="license-warning-icon"
          />
          {t("RENTALS_PAGE.LICENSE")}
        </p>
      </div>

      <h1 className="rent-title">{t("RENTALS_PAGE.RENT_TITLE")}</h1>
      <p className="rent-sub-title">
        <Trans
          i18nKey="RENTALS_PAGE.RENT_SCOOTER"
          values={{ model: "Scooter Vintage" }}
          components={{ strong: <strong style={{ color: "#9cc31c" }} /> }}
        />
      </p>

      <div className="content-container">
        <div className="rental-layout-wrapper">
          <div className="square-elements-container-rental">
            <p className="square-section-p">
              <Trans
                i18nKey="RENTALS_PAGE.RENT.LINE_1"
                values={{ price: "130 €" }}
                components={{ strong: <strong style={{ color: "#9cc31c" }} /> }}
              />
            </p>
            <div className="square-flex">
              {translations.map(({ key, subKey }, index) => {
                const translation = t(key);
                const firstLetter = translation.charAt(0);
                const restOfText = translation.slice(1);

                return (
                  <div className="square-item" key={index}>
                    <p className="main-text">
                      <span className="first-letter">{firstLetter}</span>
                      {restOfText}
                    </p>
                    <div className="secondary-text-container">
                      <p className="secondary-text">
                        <Trans i18nKey={subKey} />
                      </p>
                      <span className="asterisk">*</span>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="square-section-p">
              <Trans i18nKey="RENTALS_PAGE.INCLUDE" />
            </p>
            <p className="square-section-p" >
              <Trans i18nKey="RENTALS_PAGE.DELIVERY" />
            </p>
            {/* <button className="rental-form-button" onClick={toggleForm}>
              <img
                src={"src/assets/svg/shoping_cart.svg"}
                alt="Shopping cart"
                className="rent-button-icon"
              />
              <Trans i18nKey="RENTALS_PAGE.RENT_BUTTON" />
            </button> */}
          </div>
          <div className="top-image-wrapper">
            <div className="top-image">
              <img src="./assets/img/home/content_image_1.png" alt="Scooter" />
            </div>
          </div>
          <div className="check-list-section">
            <div className="list-container">
              <ul className="item-list">
                {items.map((item, index) => (
                  <li key={index} className="list-item">
                    <img
                      src="./assets/svg/check_mark.svg"
                      alt="Check mark"
                      className="icon"
                    />
                    <Trans i18nKey={item.textKey} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="more-info-button-container">
              <button className="more-info-button" onClick={toggleExpand}>
                {isExpanded
                  ? t("RENTALS_PAGE.SHOW_LESS")
                  : t("RENTALS_PAGE.MORE_INFO")}
              </button>
            </div>
            {isExpanded && (
              <div className="info-content">
                <ul className="info-list">
                  {infoItems.map((item, index) => (
                    <li key={index} className="info-list-item">
                      <img
                        src="./assets/svg/check_mark.svg"
                        alt="Check mark"
                        className="info-icon"
                      />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <PreFooter currentPage={"RENTALS_PAGE"} />
    </>
  );
};
