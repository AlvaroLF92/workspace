import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import "./PreFooter.scss"
import { Section } from "@/types/interfaces";


const sections: Section[] = [
  {
    value: "HOME_PAGE",
    texts: {
      text1: "HOME_PAGE.PREFOOTER_TEXT",
      text2: "HOME_PAGE.PREFOOTER_TEXT_2",
    },
  },
  {
    value: "OUR_MISSION_PAGE",
    texts: {
      text1: "OUR_MISSION_PAGE.PREFOOTER_TEXT",
      text2: "OUR_MISSION_PAGE.PREFOOTER_TEXT_2",
    },
  },
  {
    value: "TOURS_PAGE",
    texts: {
      text1: "TOURS_PAGE.PREFOOTER_TEXT",
      text2: "TOURS_PAGE.PREFOOTER_TEXT_2",
    },
  },
  {
    value: "RENTALS_PAGE",
    texts: {
      text1: "RENTALS_PAGE.PREFOOTER_TEXT",
      text2: "RENTALS_PAGE.PREFOOTER_TEXT_2",
    },
  },
  {
    value: "SALES_PAGE",
    texts: {
      text1: "SALES_PAGE.PREFOOTER_TEXT",
      text2: "SALES_PAGE.PREFOOTER_TEXT_2",
    },
  },
  {
    value: "CONTACT_PAGE",
    texts: {
      text1: "CONTACT_PAGE.PREFOOTER_TEXT",
      text2: "CONTACT_PAGE.PREFOOTER_TEXT_2",
    },
  },
];

interface PreFooterProps {
  currentPage: string; // Página actual (HOME_PAGE, SERVICES_PAGE, etc.)
}

export const PreFooter: FC<PreFooterProps> = ({ currentPage }) => {

  useTranslation();

  const currentSection = sections.find(
    (section) => section.value === currentPage
  );

  if (!currentSection) {
    console.error(`No se encontró configuración para la página: ${currentPage}`);
    return null;
  }
  
  const { text1 , text2 } = currentSection?.texts;

  return (
    <div className="preFooter-container">
      <div className="preFooter-item">
        <h1>
          <Trans i18nKey={text1} components={{ strong: <strong /> }} />
        </h1>
        <p>
          <Trans i18nKey={text2} components={{ strong: <strong /> }} />
        </p>
      </div>
    </div>
  );
};