// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (location.pathname.includes("...") && location.pathname.includes("en")) {
    window.location.href = "https://trouvemtl.com/en/opportunites";
  }
  if (location.pathname.includes("...") && !location.pathname.includes("en")) {
    window.location.href = "https://trouvemtl.com/opportunites";
  }
};
