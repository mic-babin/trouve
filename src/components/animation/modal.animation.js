export const ModalAnimation = {
  visible: {
    margin: "-50vw -50vw",
    padding: "50vw 50vw",
    width: "200vw",
    height: "200vw",
    // transform: "translate(50vw, -50vw)",
    transition: { duration: 1, type: "linear" },
  },
  hidden: {
    padding: 0,
    margin: 0,
    width: "0vw",
    height: "0vw",
    // transform: "translate(0vw, 0vw)",
    transition: { duration: 1, type: "linear" },
  },
};
