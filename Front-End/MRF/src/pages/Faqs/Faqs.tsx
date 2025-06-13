import { FC } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./Faqs.scss";

export const Faqs: FC = () => {
  const { t } = useTranslation();

  const faqKeys = [
    "AUTONOMY",
    "RECHARGE",
    "EXPERIENCE",
    "LICENSE",
    "MINOR",
    "PASSENGER",
    "INSURANCE",
    "PRICE",
    "RESIDENT_DISCOUNT",
    "BATTERY",
    "EMERGENCY",
    "COLOR",
    "ANTI_THEFT",
    "DAMAGE",
    "PARKING",
  ];

  return (
    <div className="faqs">
      <div className="faqs-container">
        <div className="title-container">
          <h1>FAQ's</h1>
        </div>

        <div className="accordion custom-accordion" id="accordionExample">
          {faqKeys.map((key) => (
            <div className="accordion-item" key={key}>
              <h2 className="accordion-header" id={`heading${key}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${key}`}
                  aria-expanded="false"
                  aria-controls={`collapse${key}`}
                >
                  <Trans i18nKey={`FAQS_PAGE.${key}.QUESTION`} />
                </button>
              </h2>
              <div
                id={`collapse${key}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${key}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <Trans i18nKey={`FAQS_PAGE.${key}.ANSWER`} />
                  {key === "RECHARGE" && (
                    <p>
                      <Trans i18nKey="FAQS_PAGE.RECHARGE.RECOMMENDATIONS" />
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
