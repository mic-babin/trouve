exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/our-team/`,
    toPath: `/en/notre-equipe/`,
    conditions: {
      language: [`en`],
    },
  });
  createRedirect({
    fromPath: `/en/our-services/`,
    toPath: `/en/nos-services/`,
    conditions: {
      language: [`en`],
    },
  });
  createRedirect({
    fromPath: `/a-propos/`,
    toPath: `/fr/`,
    conditions: {
      language: [`fr`],
    },
  });
  createRedirect({
    fromPath: `/*`,
    toPath: `/en/`,
    conditions: {
      language: [`en`],
    },
  });
};
