export const getDevice = () => {
  if (window !== "undefined" && window && document) {
    const windowWidth = window?.innerWidth;

    if (windowWidth <= 768) {
      return "mobile";
    } else if (windowWidth <= 1100) {
      return "laptop";
    } else {
      return "desktop";
    }
  }

  return null;
};
