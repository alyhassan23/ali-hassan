import React from "react";
import { motion } from "framer-motion";

/**
 * SectionReveal — wraps children in a scroll-triggered fade-up animation.
 *
 * @param {React.ReactNode} children
 * @param {number}  delay     - Animation delay in seconds (default 0)
 * @param {number}  duration  - Animation duration (default 0.65)
 * @param {number}  yOffset   - Starting Y offset in px (default 40)
 * @param {string}  className - Extra class names
 * @param {string}  margin    - Viewport margin to trigger (default "-80px")
 * @param {boolean} once      - Trigger only once (default true)
 */
const SectionReveal = ({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 40,
  className = "",
  margin = "-80px",
  once = true,
  as = "div",
  ...rest
}) => {
  const MotionComponent = motion[as] ?? motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // custom ease-out-expo curve
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default SectionReveal;
