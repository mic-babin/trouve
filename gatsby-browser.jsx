exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  const { pathname } = location;
  const top = document.getElementById("top");
  const scrollToTopRoutes = [`/`, `/nos-services/`, `/notre-equipe/`];

  if (scrollToTopRoutes.indexOf(pathname) !== -1) {
    top.scrollIntoView({ block: "start", inline: "nearest", behavior: "auto" });
  }

  return false;
};
