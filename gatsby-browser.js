// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (location.pathname.includes("...")) {
    window.location.href = "https://trouvemtl.com/opportunites";
  }
  // if (location.pathname.includes("opportunites/en/en")) {
  //   window.location.href = "https://trouvemtl.com/opportunites";
  // }
};
