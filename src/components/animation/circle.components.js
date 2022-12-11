import React from "react";
import { motion } from "framer-motion";

const Circle = () => {
  return (
    <svg height="64" width="64">
      <motion.circle
        cx="32"
        cy="32"
        r="30"
        strokeDasharray="90 360"
        pathLength="360"
        stroke="white"
        strokeWidth="1"
        fill="transparent"
        initial={{
          strokeDasharray: "0 360",
        }}
        animate={{
          strokeDasharray: "360 360",
        }}
        transition={{ duration: 0.5, delay: 1.3 }}
      />
    </svg>
  );
};

export default Circle;
