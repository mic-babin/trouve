import React, { createContext, useState, useContext } from "react";

const JobModalContext = createContext();

export const useJobModal = () => useContext(JobModalContext);

export const JobModalProvider = ({ children }) => {
  const [jobModal, setJobModal] = useState(false);

  const value = {
    jobModal,
    setJobModal,
  };
  return (
    <JobModalContext.Provider value={value}>
      {children}
    </JobModalContext.Provider>
  );
};
