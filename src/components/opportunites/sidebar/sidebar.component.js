import React, { useState, useEffect } from "react";
import { Aside, Section } from "./sidebar.styles";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import CarretDownSrc from "../../../assets/img/carret-down.svg";

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

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const handleResize = () => {
    const isNowMobile = window.innerWidth <= 767;
    setIsMobile(isNowMobile);
    if (!isNowMobile) {
      setIsOpen(true); // Always open if not in mobile view
    }
  };

  const toggleOpen = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

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

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Aside>
      <Section>
        {isMobile && (
          <motion.header
            style={{
              cursor: "pointer",
              padding: "10px 0",
              borderBottom: "1px solid #ccc",
              backgroundColor: "#f0f0f0",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={toggleOpen}
          >
            <h4 className="filter-section-header">
              <Trans>filters</Trans>
            </h4>
            <span>
              <motion.img
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                src={CarretDownSrc}
                alt="Carret"
                style={{ height: "20px" }}
              />
            </span>
          </motion.header>
        )}
        <AnimatePresence initial={false}>
          {((isMobile && isOpen) || !isMobile) && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8 }}
              style={{
                overflow: "hidden",
              }}
            >
              {/* <div className="keyword-search">
                <label htmlFor="search">
                  {activeKeyword && activeKeyword.length > 0 && (
                    <button
                      className="clear-filter"
                      onClick={() => setActiveKeyword(null)}
                      title="Clear category filter"
                    >
                      &#10006;
                    </button>
                  )}
                  {!activeKeyword ||
                    (activeKeyword?.length <= 0 && (
                      <svg
                        className="search-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                      </svg>
                    ))}
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
                    language == "en"
                      ? "Keyword Search"
                      : "Recherche par mot-clé"
                  }
                />
              </div> */}
              <div className="keyword-search">
                <input
                  className="search"
                  type="text"
                  value={activeKeyword || ""} // Ensure the input value is controlled even when null
                  onChange={(e) => setActiveKeyword(e.target.value)} // Simplify the change handler
                  id="keyword"
                  name="keyword"
                  placeholder={
                    language === "en"
                      ? "Keyword Search"
                      : "Recherche par mot-clé"
                  }
                />
                <label htmlFor="search">
                  {activeKeyword && (
                    <button
                      className="clear-filter"
                      onClick={() => setActiveKeyword("")} // Clear the keyword
                      title={
                        language === "en"
                          ? "Clear keyword filter"
                          : "Effacer le filtre de mots-clés"
                      }
                    >
                      &#10006;
                    </button>
                  )}
                  {!activeKeyword && (
                    <svg
                      className="search-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                  )}
                </label>
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
            </motion.section>
          )}
        </AnimatePresence>
      </Section>
    </Aside>
  );
};

export default Sidebar;
