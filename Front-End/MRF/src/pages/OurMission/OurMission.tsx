import { FC } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { carouselData } from "../../components/Carousel/carouselData";
import { PreFooter } from "../../components/PreFooter/PreFooter";
import { Trans, useTranslation } from "react-i18next";
import "./OurMission.scss";
import { GalleryComponent } from "../../components/GalleryComponent/GalleryComponent";

export const OurMission: FC = () => {
  useTranslation();

  return (
    <>
      <Carousel images={carouselData.our_mission.images} />
      <div className="content-container">
        <div className="title-container">
          <h1>
            <Trans i18nKey="OUR_MISSION_PAGE.OUR_MISSION" />
          </h1>
        </div>
        <div className="content-section">
          <p>
            <Trans i18nKey="OUR_MISSION_PAGE.OUR_MISSION_DESCRIPTION_TEXT.TEXT_1" />
          </p>
          <p>
            <Trans i18nKey="OUR_MISSION_PAGE.OUR_MISSION_DESCRIPTION_TEXT.TEXT_2" />
          </p>
          <p>
            <Trans i18nKey="OUR_MISSION_PAGE.OUR_MISSION_DESCRIPTION_TEXT.TEXT_3" />
          </p>
          <p>
            <Trans i18nKey="OUR_MISSION_PAGE.OUR_MISSION_DESCRIPTION_TEXT.TEXT_4" />
          </p>
        </div>
      </div>
      <GalleryComponent />
      <PreFooter currentPage="OUR_MISSION_PAGE" />
    </>
  );
};
