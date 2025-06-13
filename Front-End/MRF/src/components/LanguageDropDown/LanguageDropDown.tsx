import { FC, useState } from "react";
import { LanguageLabel } from "./LanguageLabel/LanguageLabel";
import i18n, { languages } from "../../assets/i18n/config";
import { Language, ValueLabel } from "../../types/interfaces";
import { DropDown } from "../DropDown/DropDown";
import ReactCountryFlag from "react-country-flag";
import "./LanguageDropDown.scss";

export const LanguageDropDown: FC = () => {
  const getInitialLanguage = () => {
    const explorerLanguage = languages.find(
      (lang) => lang.value === i18n.language
    );
    const defaultLanguage = languages[0];
    return explorerLanguage ?? defaultLanguage;
  };

  const changeLanguage = (selectedLang: Language): void => {
    i18n
      .changeLanguage(selectedLang.value)
      .then(() => {
        setSelectedLanguage(selectedLang);
      })
      .catch((error) => {
        throw new Error("Error al cambiar el idioma", error);
      });
  };

  const [selectedLanguage, setSelectedLanguage] = useState(
    getInitialLanguage()
  );

  const optionsWithFlags = languages.map((language) => ({
    label: (
      <div className="dropdown-option">
        <ReactCountryFlag
          countryCode={language.flagLabel}
          svg
          style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }}
          title={language.label}
        />
        {language.label}
      </div>
    ),
    value: language.value,
  }));

  return (
    <div className="language-menu">
      <DropDown
        options={optionsWithFlags}
        onChange={(selected: ValueLabel) => {
          const selectedLanguage = languages.find(
            (lang) => lang.value === selected.value
          );
          if (selectedLanguage) changeLanguage(selectedLanguage);
        }}
        placeholder={<LanguageLabel language={selectedLanguage} />}
      />
    </div>
  );
};
