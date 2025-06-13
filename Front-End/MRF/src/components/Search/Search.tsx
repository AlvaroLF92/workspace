import { FC, useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import i18n from "../../assets/i18n/config";
import searchIcon from "../../assets/svg/lupe.svg";
import { pages } from "../../data/pages";
import "./Search.scss";
import { SearchResult } from "@/types/interfaces";
import { log } from "console";

export const Search: FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (inputValue: string) => {
    setResults([]);

    if (!inputValue.trim()) {
      setSearchTerm("");
      return;
    }

    setSearchTerm(inputValue);
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      return;
    }

    const translations = i18n.getResourceBundle(i18n.language, "translation");

    function extractTexts(obj: {}) {
      let texts: { [key: string]: string } = {};

      function traverse(currentObj: {}, previousKey = "") {
        for (const [key, value] of Object.entries(currentObj)) {
          if (typeof value === "object" && value !== null) {
            traverse(value, key);
          } else if (typeof value === "string" && typeof key === "string") {
            texts[previousKey + "_" + key] = value;
          }
        }
      }

      traverse(obj);
      return texts;
    }

    const matches = Object.values(pages).flatMap((page) => {
      const pageKey = page.value;

      let texts = translations[pageKey];

      if (!texts) return [];

      texts = extractTexts(texts);

      const foundTexts = Object.entries(texts)

        .filter(
          ([_, text]) =>
            typeof text === "string" &&
            text.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(([_, text]) => text as string);

      return foundTexts.map((foundText) => ({
        label: page.dictionaryLabel(),
        url: `/${page.url()}`,
        foundText,
      }));
    });

    setResults(matches);
  }, [searchTerm]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (!isModalOpen) {
      setResults([]);
      setSearchTerm("");
    }
  }, [isModalOpen]);

  return (
    <>
      <button
        onClick={toggleModal}
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#searchModal"
      >
        <img src={searchIcon} alt="Search" />
      </button>

      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="searchModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="searchModalLabel">
                {t("GLOBAL.SEARCH")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <span></span>
              <input
                type="text"
                className="form-control mb-3"
                placeholder={""}
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <ul className="list-group">
                {results.length > 0
                  ? results.map((result, index) => (
                      <li key={index} className="list-group-item">
                        <a className="search-link" href={result.url}>
                          <div className="page-label">
                            <strong>{t(result.label)}</strong>:<br />
                          </div>
                          <div className="limit-text">
                            <Trans
                              i18nKey={result.foundText}
                              components={{ strong: <strong /> }}
                            />
                          </div>
                        </a>
                        {index + 1 < results.length && <hr />}
                      </li>
                    ))
                  : searchTerm && (
                      <li className="list-group-item text-muted">
                        {t("GLOBAL.NOT_FOUND", "No results found.")}
                      </li>
                    )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
