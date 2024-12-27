export const pageAnimation = {
  initial: { transform: "translateX(-100%)", opacity: 0 },
  animate: { transform: "translateX(0)", opacity: 1 },
  exit: {
    transform: "translateX(100%)",
    opacity: 0,
    transition: { duration: 0.1 },
  },
};
