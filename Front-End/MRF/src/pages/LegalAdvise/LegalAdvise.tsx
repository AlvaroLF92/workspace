import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import "./LegalAdvise.scss";

export const LegalAdvise: FC = () => {
  useTranslation();

  return (
    <div className="advise-wrapper" >
      <div className="advise-container">
        <h1>
          <Trans i18nKey="LEGAL_ADVISE_PAGE.TITLE" />
        </h1>

        <p>
          <Trans i18nKey="LEGAL_ADVISE_PAGE.TEXT1" />
        </p>
        <p>
          <Trans i18nKey="LEGAL_ADVISE_PAGE.TEXT2" />
        </p>
      </div>
    </div>
  );
};
