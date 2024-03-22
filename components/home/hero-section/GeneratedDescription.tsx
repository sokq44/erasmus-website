"use client";

import React, { FC } from "react";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

interface Props {
  children: string;
  className?: string;
  delay?: number;
}

export const GeneratedDescription: FC<Props> = (props) => {
  const [scope, animate] = useAnimate();

  const { children, className, delay } = props;
  const childrenArray = children.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(delay),
      }
    );
  }, [scope.current]);

  return (
    <motion.div ref={scope} className={className}>
      {childrenArray.map((word, idx) => {
        return (
          <motion.span key={word + idx} className="opacity-0">
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default GeneratedDescription;
