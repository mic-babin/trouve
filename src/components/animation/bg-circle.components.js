import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

const Circle = ({ roundSize, color, isInView }) => {
  const round = useRef();

  return (
    roundSize && (
      <svg
        style={{ transform: "rotate(-0.25turn)" }}
        height={roundSize.toString()}
        width={roundSize.toString()}
      >
        <motion.circle
          ref={round}
          cx={(roundSize / 2).toString()}
          cy={(roundSize / 2).toString()}
          r={((roundSize - 2) / 2).toString()}
          pathLength="360"
          stroke={color}
          strokeWidth="1.5"
          fill="transparent"
          initial={{
            strokeDasharray: "0 360",
          }}
          animate={
            isInView && {
              strokeDasharray: "360 360",
            }
          }
          transition={{ duration: 1, delay: 2 }}
        />
      </svg>
    )
  );
};

export default Circle;
