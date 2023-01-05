import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Circle = (hovered) => {
  const roundControls = useAnimationControls();
  const round = useRef();
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    if (!animated) {
      setTimeout(() => {
        setAnimated(true);
      }, 4400);
    }

    if (hovered.hovered) {
      roundControls.start({
        strokeDasharray: "0 360",
        transition: { duration: 0.5, delay: 0.2 },
      });
    } else if (animated) {
      roundControls.start({
        strokeDasharray: "360 360",
        transition: { duration: 0.5, delay: 0.2 },
      });
    }
  }, [hovered, animated, roundControls]);

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
      />
    </svg>
  );
};

export default Circle;
