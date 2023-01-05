import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

const Circle = ({ roundSize, hover, color }) => {
  const roundControls = useAnimationControls();
  const round = useRef();

  useEffect(() => {
    if (hover) {
      roundControls.start({
        strokeDasharray: "360 360",
        // transition: { duration: 0.75 },
      });
    } else {
      roundControls.start({
        strokeDasharray: "0 360",
        // transition: { duration: 0.75 },
      });
    }
  }, [hover, roundControls]);

  return (
    roundSize && (
      <svg height={roundSize.toString()} width={roundSize.toString()}>
        <motion.circle
          ref={round}
          cx={(roundSize / 2).toString()}
          cy={(roundSize / 2).toString()}
          r={((roundSize - 2) / 2).toString()}
          strokeDasharray="0 360"
          pathLength="360"
          stroke={color}
          strokeWidth="1.5"
          fill="transparent"
          initial={{
            strokeDasharray: "0 360",
            // transform: "rotate(-90deg)",
          }}
          transition={{ duration: 1 }}
          animate={roundControls}
        />
      </svg>
    )
  );
};

export default Circle;
