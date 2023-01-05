import React from "react";
import { AnimatedHeroLink as Link } from "../styled-components/animated-hero-link.style";
import { motion } from "framer-motion";

const AnimatedHeroLink = ({ link, type, color }) => {
  console.log(type === motion.a);
  return (
    <Link
      color={color}
      as={type}
      href={type === motion.a && link.url}
      target={type === motion.a && "_blank"}
      initial={{ opacity: 0, transform: "translateX(200px)" }}
      animate={{ opacity: 1, transform: "translateX(0px)" }}
      transition={{ duration: 1, delay: 4 }}
    >
      <span className="mask">
        <div className="link-container">
          <span className="link-title1 title">{link.text}</span>
          <span className="link-title2 title">{link.text}</span>
        </div>
      </span>
    </Link>
  );
};

export default AnimatedHeroLink;
