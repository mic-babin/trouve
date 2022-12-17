import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

const Circle = (hovered) => {
  const roundControls = useAnimationControls();
  const round = useRef();

  useEffect(() => {
    if (hovered.hovered) {
      roundControls.start({
        strokeDasharray: "0 360",
        transition: { duration: 0.5, delay: 0.2 },
      });
    } else {
      roundControls.start({
        strokeDasharray: "360 360",
        transition: { duration: 0.5, delay: 0.2 },
      });
    }
  }, [hovered]);

  return (
    <svg height="64" width="64">
      <motion.circle
        ref={round}
        cx="32"
        cy="32"
        r="30"
        strokeDasharray="90 360"
        pathLength="360"
        stroke="white"
        strokeWidth="1.5"
        fill="transparent"
        initial={{
          strokeDasharray: "0 360",
        }}
        animate={roundControls}
        transition={{ duration: 0.5, delay: 1.3 }}
      />
    </svg>
  );
};

export default Circle;
