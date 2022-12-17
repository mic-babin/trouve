exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  const { pathname } = location;
  console.log("pathName = ", pathname);
  const top = document.getElementById("top");
  // list of routes for the scroll-to-top-hook
  const scrollToTopRoutes = [`/`, `/nos-services/`, `/notre-equipe/`];

  if (scrollToTopRoutes.indexOf(pathname) !== -1) {
    console.log(top);
    top.scrollIntoView({ block: "start", inline: "nearest", behavior: "auto" });
  }

  return false;
};
