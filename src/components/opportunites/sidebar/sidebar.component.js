import React, { useState, useEffect } from "react";
import { Aside, Section } from "./sidebar.styles";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";

const Sidebar = ({ locations, categories }) => {
  const [textSearch, setTextSearch] = useState("");

  const [locationLimitTo, setLocationLimitTo] = useState(false);
  const [categoryLimitTo, setCategoryLimitTo] = useState(false);

  const {
    i18n: { language },
  } = useI18next();

  const searchOnDelay = () => {
    // Implement search logic here, potentially with debounce
  };

  const clearSearchParamsAndLoadData = (type) => {
    // Clear search params based on type and reload data
  };

  const addOrRemoveLocation = (location) => {
    // Add or remove location from selected filters
  };

  const addOrRemoveCategory = (category) => {
    // Add or remove category from selected filters
  };

  useEffect(() => {
    // You might want to fetch initial data here
  }, []);

  return (
    <Aside>
      <Section>
        <div className="keyword-search">
          <label htmlFor="keyword">
            <i className="bhi-search"></i>
          </label>
          <input
            className="search"
            type="text"
            value={textSearch}
            onChange={(e) => {
              setTextSearch(e.target.value);
              searchOnDelay();
            }}
            id="keyword"
            name="keyword"
            placeholder={
              language == "en" ? "Keyword Search" : "Recherche par mot-clef"
            }
          />
          {textSearch.length > 0 && (
            <button
              className="clear-filter"
              onClick={() => clearSearchParamsAndLoadData("text")}
              name="clear-all"
            >
              <i className="bhi-times"></i>
            </button>
          )}
        </div>
        <section
          className={`filter-section ${!locationLimitTo ? "active" : ""}`}
        >
          <div className="filter-section-header">
            <h4>
              <Trans>location</Trans>
            </h4>
            {locations.some((location) => location.selected) && (
              <button
                className="clear-filter"
                onClick={() => clearSearchParamsAndLoadData("location")}
                name="clear-all"
              >
                x
              </button>
            )}
          </div>
          {locations.map((location, index) => (
            <div className="filter-item slide-down-item" key={index}>
              <input
                type="checkbox"
                id={location.id}
                checked={location.selected}
                onChange={() => addOrRemoveLocation(location)}
              />
              <label htmlFor={location.id}>{location.name}</label>
              <span>{location.count}</span>
            </div>
          ))}
        </section>
        <section
          className={`filter-section ${!categoryLimitTo ? "active" : ""}`}
        >
          <div className="filter-section-header">
            <h4>
              <Trans>categories</Trans>
            </h4>
            {categories.some((category) => category.selected) && (
              <button
                className="clear-filter"
                onClick={() => clearSearchParamsAndLoadData("category")}
                name="clear-all"
              >
                x
              </button>
            )}
          </div>
          {categories.map((category, index) => (
            <div className="filter-item slide-down-item" key={index}>
              <input
                type="checkbox"
                id={category.id}
                checked={category.selected}
                onChange={() => addOrRemoveCategory(category)}
              />
              <label htmlFor={category.id}>{category.name}</label>
              <span>{category.count}</span>
            </div>
          ))}
        </section>
        <span className="show-more">
          <Trans>showLess</Trans>
        </span>
        <button
          type="button"
          className="bhi-arrow-left"
          name="back-arrow"
          onClick={() => {
            /* Go back logic */
          }}
        ></button>
      </Section>
    </Aside>
  );
};

export default Sidebar;
