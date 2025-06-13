import { FC } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { carouselData } from "../../components/Carousel/carouselData";
import { PreFooter } from "../../components/PreFooter/PreFooter";
import { Trans, useTranslation } from "react-i18next";
import "./Sales.scss";

export const Sales: FC = () => {
  const { t } = useTranslation();

  const i18nKeysCr6 = [
    "SALES_PAGE.FAURO_CR6.SPEED",
    "SALES_PAGE.FAURO_CR6.AUTONOMY",
    "SALES_PAGE.FAURO_CR6.POWER",
    "SALES_PAGE.FAURO_CR6.BATTERY",
    "SALES_PAGE.FAURO_CR6.CHARGE",
    "SALES_PAGE.FAURO_CR6.CYCLE",
  ];

  const i18nKeysFun = [
    "SALES_PAGE.FAURO_FUN.SPEED",
    "SALES_PAGE.FAURO_FUN.AUTONOMY",
    "SALES_PAGE.FAURO_FUN.POWER",
    "SALES_PAGE.FAURO_FUN.BATTERY",
    "SALES_PAGE.FAURO_FUN.CHARGE",
    "SALES_PAGE.FAURO_FUN.CYCLE",
  ];

  return (
    <>
      <Carousel images={carouselData.sales.images} />

      <div className="sales-section">
        <h1 className="sales-title">
          <Trans i18nKey={"SALES_PAGE.KM_0"} />
        </h1>
        <p className="high-res-left high-res-right">
          <Trans i18nKey={"SALES_PAGE.KM_TEXT"} />
        </p>
      </div>
      <h1 className="item-name high-res-left">
        {t("SALES_PAGE.FAURO_CR6.NAME")}
      </h1>

      <div className="item-description high-res-left high-res-right">
        <p>
          <Trans i18nKey={"SALES_PAGE.FAURO_CR6.DESCRIPTION"} />
        </p>
        <p className="price-tag">
          <Trans i18nKey={"SALES_PAGE.FAURO_CR6.PRICE_TAG"} />
          <span>
            2.800<span className="small-char">€</span>
          </span>
          <div>
            <Trans i18nKey={"SALES_PAGE.LICENSE"} />
          </div>

          <span className="license-tag">
            <Trans i18nKey={"SALES_PAGE.LICENSE_TYPE_CR6"} />
          </span>
        </p>
      </div>

      <div className="sale-item">
        <img
          src="./assets/img/sales/sales_item_1.webp"
          alt="sale item"
          className="sale-item-image high-res-image-right"
        />
        <div className="rectangulo-color"></div> {/* Este es el rectángulo */}
        <div className="translated-list">
          {i18nKeysCr6.map((key, index) => (
            <div key={index} className="list-item high-res-left">
              <Trans i18nKey={key} />
            </div>
          ))}
        </div>
      </div>

      <div className="tech-info high-res-left high-res-right">
        <img
          src="./assets/img/sales/fun2.webp"
          alt="sale item"
          className="sale-item-image-tech high-res-image-left"
        />
        <div className="tech-info">
          <div>
            {[
              "SALES_PAGE.FAURO_CR6.TECH.BREAKS",
              "SALES_PAGE.FAURO_CR6.TECH.TYRES",
              "SALES_PAGE.FAURO_CR6.TECH.WEIGHT",
              "SALES_PAGE.FAURO_CR6.TECH.MAX_WEIGHT",
              "SALES_PAGE.FAURO_CR6.TECH.SIZE",
            ].map((key, index) => (
              <p key={index}>
                <Trans i18nKey={key} />
              </p>
            ))}
          </div>
          <div>
            {[
              "SALES_PAGE.FAURO_CR6.TECH.CHARGER",
              "SALES_PAGE.FAURO_CR6.TECH.TENSION",
              "SALES_PAGE.FAURO_CR6.TECH.CONTROLLER",
              "SALES_PAGE.FAURO_CR6.TECH.MAX_INCLINATION",
              "SALES_PAGE.FAURO_CR6.TECH.MAX_PAR",
            ].map((key, index) => (
              <p key={index}>
                <Trans i18nKey={key} />
              </p>
            ))}
          </div>
        </div>
      </div>

      <h1 className="item-name high-res-left">
        {t("SALES_PAGE.FAURO_FUN.NAME")}
      </h1>

      <div className="item-description high-res-left high-res-right">
        <p>
          <Trans i18nKey={"SALES_PAGE.FAURO_FUN.DESCRIPTION"} />
        </p>
        <p className="price-tag">
          <Trans i18nKey={"SALES_PAGE.FAURO_FUN.PRICE_TAG"} />
          <span>
            1.800<span className="small-char">€</span>
          </span>
          <div>
            <Trans i18nKey={"SALES_PAGE.LICENSE"} />
          </div>

          <span className="license-tag">
            <Trans i18nKey={"SALES_PAGE.LICENSE_TYPE_FUN"} />
          </span>
        </p>
      </div>

      <div className="sale-item">
        <img
          src="./assets/img/sales/sales_item_2.webp"
          alt="sale item"
          className="sale-item-image high-res-image-right"
        />
        <div className="rectangulo-color"></div> {/* Este es el rectángulo */}
        <div className="translated-list">
          {i18nKeysFun.map((key, index) => (
            <div key={index} className="list-item high-res-left">
              <Trans i18nKey={key} />
            </div>
          ))}
        </div>
      </div>

      <div className="tech-info high-res-left high-res-right">
        <img
          src="./assets/img/sales/fun3.webp"
          alt="sale item"
          className="sale-item-image-tech high-res-image-left"
        />
        <div className="tech-info">
          <div>
            {[
              "SALES_PAGE.FAURO_FUN.TECH.BREAKS",
              "SALES_PAGE.FAURO_FUN.TECH.TYRES",
              "SALES_PAGE.FAURO_FUN.TECH.WEIGHT",
              "SALES_PAGE.FAURO_FUN.TECH.MAX_WEIGHT",
              "SALES_PAGE.FAURO_FUN.TECH.SIZE",
            ].map((key, index) => (
              <p key={index}>
                <Trans i18nKey={key} />
              </p>
            ))}
          </div>
          <div>
            {[
              "SALES_PAGE.FAURO_FUN.TECH.CHARGER",
              "SALES_PAGE.FAURO_FUN.TECH.TENSION",
              "SALES_PAGE.FAURO_FUN.TECH.CONTROLLER",
              "SALES_PAGE.FAURO_FUN.TECH.MAX_INCLINATION",
            ].map((key, index) => (
              <p key={index}>
                <Trans i18nKey={key} />
              </p>
            ))}
          </div>
        </div>
      </div>

      <p className="sales-contact-title">
        <Trans i18nKey="SALES_PAGE.TEST" />
      </p>

      <div className="content-blocks-sales">
        <div
          className="content-block-sales"
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=34651651341",
              "_blank"
            )
          }
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
          className="content-block-sales"
          onClick={() => window.open("tel:+34651651341")}
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
        {/* <div
          className="content-block"
          onClick={() => handleClick()}
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
        </div> */}
      </div>

      <PreFooter currentPage={"SALES_PAGE"} />
    </>
  );
};
