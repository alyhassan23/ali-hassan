import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * useScrollReveal — wraps Framer Motion's useInView with sensible defaults.
 * @param {object} options
 * @param {boolean} options.once - Only trigger once (default: true)
 * @param {string} options.margin - Viewport margin to trigger early (default: "-80px")
 * @param {number} options.amount - Fraction of element visible to trigger (default: 0.15)
 */
export const useScrollReveal = ({
  once = true,
  margin = "-80px",
  amount = 0.15,
} = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin, amount });
  return { ref, isInView };
};
