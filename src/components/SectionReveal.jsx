import React from "react";
import { motion } from "framer-motion";

/**
 * SectionReveal — wraps children in a scroll-triggered fade-up animation.
 *
 * @param {React.ReactNode} children
 * @param {number}  delay     - Animation delay in seconds (default 0)
 * @param {number}  duration  - Animation duration (default 0.55)
 * @param {number}  yOffset   - Starting Y offset in px (default 24)
 * @param {string}  className - Extra class names
 * @param {string}  margin    - Viewport margin to trigger early (default "-40px")
 * @param {boolean} once      - Trigger only once (default true)
 *
 * Performance notes:
 * - margin "-40px" triggers early so content is never visibly hidden at the fold
 * - yOffset 24 keeps movement subtle — not distracting
 * - ease-out-expo [0.22,1,0.36,1] feels snappy and professional
 */
const SectionReveal = ({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 24,
  className = "",
  margin = "-40px",
  once = true,
  as = "div",
  ...rest
}) => {
  const MotionComponent = motion[as] ?? motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin, amount: 0.1 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "transform, opacity" }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default SectionReveal;
