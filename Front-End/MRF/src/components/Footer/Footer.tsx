import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import PhoneIcon from "../../assets/svg/phone.svg";
import MailIcon from "../../assets/svg/mail.svg";
import LocationIcon from "../../assets/svg/location.svg";
import FooterIcon from "../../assets/svg/burguer_logo.svg";
import "./Footer.scss";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-home">
          <Link to="/contact">
            <div className="footer-icon-container">
              <img
                src={FooterIcon}
                alt="Contact Page"
                className="footer-icon"
              />
            </div>
          </Link>
        </div>

        <div className="footer-contact">
          <h3>{t("FOOTER.CONTACT_US")}</h3>
          <p className="p-phone">
            <img src={PhoneIcon} alt="Phone" className="icon" />
            <a href={`tel:${t("FOOTER.CONTACT_INFO.PHONE")}`}>
              {t("FOOTER.CONTACT_INFO.PHONE")}
            </a>
          </p>
          <p>
            <img src={MailIcon} alt="Mail" className="icon" />
            <a href={`mailto:${t("FOOTER.CONTACT_INFO.MAIL")}`}>
              {t("FOOTER.CONTACT_INFO.MAIL")}
            </a>
          </p>
          <p>
            <img src={LocationIcon} alt="Location" className="icon" />
            <a
              href={`https://maps.app.goo.gl/R8U6fRPbBbfQtiiS7`}
              target="_blank"
            >
              {t("FOOTER.CONTACT_INFO.ADRESS")}
              <br />
              {t("FOOTER.CONTACT_INFO.ADRESS_2")}
            </a>
          </p>
        </div>

        <div className="footer-links">
          <h3>{t("FOOTER.LEGAL_LINKS")}</h3>
          <ul>
            <li>
              <Link to="/faqs">{t("FOOTER.FAQS")}</Link>
            </li>
            <li>
              <Link to="/legal_advise">{t("FOOTER.LEGAL_ADVISE")}</Link>
            </li>
            <li>
              <Link to="/privacy">{t("FOOTER.PRIVACITY")}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-media">
          <div>
            <SocialMedia />
          </div>
          <div>
            <p>© 2024 Motion Rent and Fun all rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
