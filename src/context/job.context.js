import React, { createContext, useState, useContext } from "react";

const JobContext = createContext();

export const useJob = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [job, setJob] = useState(null);

  const value = {
    job,
    setJob,
  };
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};
