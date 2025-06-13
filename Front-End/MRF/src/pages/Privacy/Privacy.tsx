import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import "./Privacy.scss";

export const Privacy: FC = () => {

  useTranslation();

  return (
    <div className="privacy-policy-container">
      <h1 className="section-title">
        <Trans i18nKey="PRIVACY_PAGE.SECTION_TITLE" />
      </h1>
      <p className="intro-text">
        <Trans i18nKey="PRIVACY_PAGE.INTRO_TEXT" />
      </p>
      <h2 className="information-title">
        <Trans i18nKey="PRIVACY_PAGE.INFORMATION_TITLE" />
      </h2>
      <div className="privacy-sections">
        <section>
          <h3>
            <Trans i18nKey="PRIVACY_PAGE.RESPONSIBLE_TITLE" />
          </h3>
          <p>
            <Trans i18nKey="PRIVACY_PAGE.RESPONSIBLE_TEXT" />
          </p>
        </section>
        <section>
          <h3>
            <Trans i18nKey="PRIVACY_PAGE.NEED_TITLE" />
          </h3>
          <p>
            <Trans i18nKey="PRIVACY_PAGE.NEED_TEXT" />
          </p>
        </section>
        <section>
          <h3>
            <Trans i18nKey="PRIVACY_PAGE.PURPOSE_TITLE" />
          </h3>
          <p>
            <Trans i18nKey="PRIVACY_PAGE.PURPOSE_TEXT_1" />
          </p>
          <p>
            <Trans i18nKey="PRIVACY_PAGE.PURPOSE_TEXT_2" />
          </p>
        </section>
        <section>
          <h3>
            <Trans i18nKey="PRIVACY_PAGE.RECIPIENTS_TITLE" />
          </h3>
          <p>
            <Trans i18nKey="PRIVACY_PAGE.RECIPIENTS_TEXT" />
          </p>
        </section>
        <section>
          <h3>
            <Trans i18nKey="PRIVACY_PAGE.RETENTION_TITLE" />
          </h3>
          <p>
            <Trans i18nKey="PRIVACY_PAGE.RETENTION_TEXT" />
          </p>
        </section>
        <section>
          <h3>
            <Trans i18nKey="PRIVACY_PAGE.RIGHTS_TITLE" />
          </h3>
          <p>
            <Trans i18nKey="PRIVACY_PAGE.RIGHTS_TEXT_1" />
          </p>
          <p>
            <Trans i18nKey="PRIVACY_PAGE.RIGHTS_TEXT_2" />
          </p>
          <p>
            <Trans i18nKey="PRIVACY_PAGE.RIGHTS_TEXT_3" />
          </p>
        </section>
        <section>
          <h3>
            <Trans i18nKey="PRIVACY_PAGE.POLICY_CHANGE_TITLE" />
          </h3>
          <p>
            <Trans i18nKey="PRIVACY_PAGE.POLICY_CHANGE_TEXT" />
          </p>
        </section>
        <section>
          <h3>
            <Trans i18nKey="PRIVACY_PAGE.LAW_TITLE" />
          </h3>
          <p>
            <Trans i18nKey="PRIVACY_PAGE.LAW_TEXT" />
          </p>
        </section>
      </div>
    </div>
  );
};
