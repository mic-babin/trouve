import React from "react";
import { AnimatedHeroLink as Link } from "../styled-components/animated-hero-link.style";
import { motion } from "framer-motion";

const AnimatedHeroLink = ({ link, type, color, bold }) => {
  return (
    <Link
      color={color}
      as={type}
      href={type === motion.a ? link.url : undefined}
      target={type === motion.a ? "_blank" : undefined}
      initial={{ opacity: 0, transform: "translateX(200px)" }}
      animate={{ opacity: 1, transform: "translateX(0px)" }}
      transition={{ duration: 1, delay: 4 }}
      style={{ cursor: "pointer" }}
    >
      <span className="mask">
        <div className="link-container">
          <span
            className="link-title1 title"
            style={{ fontFamily: bold && "Neue" }}
          >
            {link.text}
          </span>
          <span
            className="link-title2 title"
            style={{ fontFamily: bold && "Neue" }}
          >
            {link.text}
          </span>
        </div>
      </span>
    </Link>
  );
};

export default AnimatedHeroLink;
