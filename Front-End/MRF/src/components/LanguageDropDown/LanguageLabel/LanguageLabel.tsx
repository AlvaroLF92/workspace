import React from "react";
import ReactCountryFlag from "react-country-flag";
import { LanguageLabelComponentProps } from "@/types/interfaces";
import "./LanguageLabel.scss";


export const LanguageLabel: React.FC<LanguageLabelComponentProps> = ({
  language,
}) => {
  return (
    <div className="flag-container">
      <ReactCountryFlag
        countryCode={language.flagLabel}
        svg
        style={{ width: "1rem", height: "1rem" }}
        title={language.label}
      />
      <div>{language.label}</div>
    </div>
  );
};
