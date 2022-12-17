import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

const Circle = ({ roundSize, color, isInView }) => {
  const round = useRef();

  return (
    <svg height={roundSize.toString()} width={roundSize.toString()}>
      <motion.circle
        ref={round}
        cx={(roundSize / 2).toString()}
        cy={(roundSize / 2).toString()}
        r={((roundSize - 2) / 2).toString()}
        pathLength="360"
        stroke={color}
        strokeWidth="1"
        fill="transparent"
        initial={{
          strokeDasharray: "0 360",
        }}
        animate={
          isInView && {
            strokeDasharray: "360 360",
          }
        }
        transition={{ duration: 0.5, delay: 1 }}
      />
    </svg>
  );
};

export default Circle;
