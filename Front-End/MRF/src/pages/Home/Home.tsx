import { FC } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { carouselData } from "../../components/Carousel/carouselData";
import { PreFooter } from "../../components/PreFooter/PreFooter";
import { TextImage } from "../../components/TextImage/TextImage";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import "./Home.scss";

export const Home: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (item: string) => {
    if (item === "HOME_PAGE.WHATSAPP_ITEM") {
      window.open("https://api.whatsapp.com/send?phone=34651651341", "_blank");
    } else if (item === "HOME_PAGE.PHONE_ITEM") {
      window.open("tel:+34651651341");
    } else if (item === "HOME_PAGE.LIST_ITEM") {
      // const modal = new window.bootstrap.Modal(
      //   document.getElementById("staticBackdrop")!
      // );
      // modal.show();
      
      navigate('/contact');
    }
  };

  const handleModalOptionClick = (option: string) => {
    console.log(`Opción seleccionada: ${option}`);
  };

  const translations = [
    { key: "HOME_PAGE.1DAY", subKey: "HOME_PAGE.1DAY_SUBTEXT" },
    { key: "HOME_PAGE.2DAYS", subKey: "HOME_PAGE.2DAY_SUBTEXT" },
    { key: "HOME_PAGE.3DAYS", subKey: "HOME_PAGE.3DAY_SUBTEXT" },
  ];

  const bubbleContent = [
    {
      imageSrc: "./assets/img/home/item_image_1.webp",
      text1: "HOME_PAGE.ITEM_BATTERY.LINE_1",
      text2: "HOME_PAGE.ITEM_BATTERY.LINE_2",
    },
    {
      imageSrc: "./assets/img/home/item_image_2.webp",
      text1: "HOME_PAGE.ITEM_LICENSE.LINE_1",
      text2: "HOME_PAGE.ITEM_LICENSE.LINE_2",
    },
    {
      imageSrc: "./assets/img/home/item_image_3.webp",
      text1: "HOME_PAGE.ITEM_HOTEL.LINE_1",
      text2: "HOME_PAGE.ITEM_HOTEL.LINE_2",
    },
    {
      imageSrc: "./assets/img/home/item_image_4.webp",
      text1: "HOME_PAGE.ITEM_KM.LINE_1",
      text2: "HOME_PAGE.ITEM_KM.LINE_2",
    },
  ];

  return (
    <>
      <Carousel images={carouselData.home.images} />

      <div className="content-blocks">
        {bubbleContent.map((item, index) => (
          <div className="content-block" key={index}>
            <img
              src={item.imageSrc}
              alt={`Content Block ${index + 1}`}
              className="content-image"
            />
            <div className="content-text">
              <p>
                <Trans i18nKey={item.text1} />
              </p>
              <p>
                <Trans i18nKey={item.text2} />
              </p>
            </div>
          </div>
        ))}
      </div>

      <TextImage
        textKeys={[
          "HOME_PAGE.TEXT_EXPERIENCE_DESCRIPTION",
          "HOME_PAGE.TEXT_CHARGER",
        ]}
        imageSrc="./assets/img/home/content_image_1.png"
        layout="text-left"
      />
      <TextImage
        textKeys={[
          "HOME_PAGE.TEXT_DESCRIPTION_AS_TOY",
          "HOME_PAGE.TEXT_HOMOLOGATION",
        ]}
        imageSrc="./assets/img/home/content_image_2.webp"
        layout="text-right"
      />
      <TextImage
        textKeys={["HOME_PAGE.TEXT_BATTERY"]}
        imageSrc="./assets/img/home/content_image_3.png"
        layout="text-left"
      />

      <div className="square-elements-container">
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

        <div className="text-section">
          <p className="main-centered-text">
            <Trans i18nKey="HOME_PAGE.PRICE_PER_DAY" />
          </p>
          <div className="secondary-text-container">
            <p className="secondary-centered-text">
              <Trans i18nKey="HOME_PAGE.TAX_1" />
            </p>
          </div>
          <div className="secondary-text-container">
            <p className="secondary-centered-text">
              <Trans i18nKey="HOME_PAGE.TAX_2" />
            </p>
          </div>
        </div>
      </div>

      <div className="title-blocks">
        <h1>{t('HOME_PAGE.BOOKING_INFO')}</h1>
      </div>
      <div className="content-blocks">
        <div
          className="content-block"
          onClick={() => handleClick("HOME_PAGE.WHATSAPP_ITEM")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="./assets/img/home/item_image_5.webp"
            alt="WhatsApp Icon"
            className="content-image"
          />
          <div className="content-text">
            <p>
              <Trans i18nKey="HOME_PAGE.WHATSAPP_ITEM.LINE_1" />
            </p>
            <p>
              <Trans i18nKey="HOME_PAGE.WHATSAPP_ITEM.LINE_2" />
            </p>
          </div>
        </div>
        <div
          className="content-block"
          onClick={() => handleClick("HOME_PAGE.PHONE_ITEM")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="./assets/img/home/item_image_6.webp"
            alt="Phone Icon"
            className="content-image"
          />
          <div className="content-text">
            <p>
              <Trans i18nKey="HOME_PAGE.PHONE_ITEM.LINE_1" />
            </p>
            <p>
              <Trans i18nKey="HOME_PAGE.PHONE_ITEM.LINE_2" />
            </p>
          </div>
        </div>
        <div
          className="content-block"
          onClick={() => handleClick("HOME_PAGE.LIST_ITEM")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="./assets/img/home/item_image_7.webp"
            alt="List Icon"
            className="content-image"
          />
          <div className="content-text">
            <p>
              <Trans i18nKey="HOME_PAGE.LIST_ITEM.LINE_1" />
            </p>
            <p>
              <Trans i18nKey="HOME_PAGE.LIST_ITEM.LINE_2" />
            </p>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Selecciona una opción
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleModalOptionClick("1")}
              >
                Opción 1
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleModalOptionClick("2")}
              >
                Opción 2
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleModalOptionClick("3")}
              >
                Opción 3
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Entendido
              </button>
            </div>
          </div>
        </div>
      </div>

      <PreFooter currentPage={"HOME_PAGE"} />
    </>
  );
};
