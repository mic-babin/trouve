import React, { useState, useEffect } from "react";
import { Aside, Section } from "./sidebar.styles";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";

const Sidebar = ({
  locations,
  categories,
  activeLocation,
  activeCategory,
  setActiveLocation,
  setActiveCategory,
  resetLocationFilter,
  resetCategoryFilter,
  activeKeyword,
  setActiveKeyword,
}) => {
  const {
    i18n: { language },
  } = useI18next();

  const addOrRemoveLocation = (location) => {
    if (activeLocation === location) {
      resetLocationFilter();
    } else {
      setActiveLocation(location);
    }
  };

  const addOrRemoveCategory = (category) => {
    if (activeCategory === category) {
      resetCategoryFilter(); // Uncomment or implement as needed
    } else {
      setActiveCategory(category);
    }
  };

  // Assuming locations and categories are passed with a 'selected' property
  const isLocationSelected = (location) => activeLocation === location;
  const isCategorySelected = (category) => activeCategory === category;

  const clearLocationFilter = () => {
    resetLocationFilter();
    setActiveLocation(null); // Ensure this action clears the active location state
  };

  const clearCategoryFilter = () => {
    resetCategoryFilter(); // Ensure this action is implemented to clear category selections
    setActiveCategory(null); // Ensure this action clears the active category state
  };

  return (
    <Aside className="d-none d-md-block">
      <Section>
        <div className="keyword-search">
          <label htmlFor="keyword">
            <i className="bhi-search"></i>
          </label>
          <input
            className="search"
            type="text"
            value={activeKeyword}
            onChange={(e) => {
              if (e.target.value.length > 0) {
                setActiveKeyword(e.target.value);
              } else {
                setActiveKeyword(null);
              }
            }}
            id="keyword"
            name="keyword"
            placeholder={
              language == "en" ? "Keyword Search" : "Recherche par mot-clef"
            }
          />
        </div>
        <div className="filter-section">
          <div className="filter-section-header">
            <h4>
              <Trans>location</Trans>
            </h4>
            {activeLocation && (
              <button
                className="clear-filter"
                onClick={clearLocationFilter}
                title="Clear location filter"
              >
                &#10006;
              </button>
            )}
          </div>
          {locations.map((location, index) => (
            <div className="filter-item slide-down-item" key={index}>
              <input
                type="checkbox"
                id={location.id}
                checked={isLocationSelected(location)}
                onChange={() => addOrRemoveLocation(location)}
              />
              <label htmlFor={location.id}>{location.name}</label>
              <span>{location.count}</span>
            </div>
          ))}
        </div>
        <div className="fitler-section">
          <div className="filter-section-header">
            <h4>
              <Trans>category</Trans>
            </h4>
            {activeCategory && (
              <button
                className="clear-filter"
                onClick={clearCategoryFilter}
                title="Clear category filter"
              >
                &#10006;
              </button>
            )}
          </div>
          {categories.map((category, index) => (
            <div className="filter-item slide-down-item" key={index}>
              <input
                type="checkbox"
                id={category.id}
                checked={isCategorySelected(category)}
                onChange={() => addOrRemoveCategory(category)}
              />
              <label htmlFor={category.id}>{category.name}</label>
              <span>{category.count}</span>
            </div>
          ))}
        </div>
      </Section>
    </Aside>
  );
};

export default Sidebar;
