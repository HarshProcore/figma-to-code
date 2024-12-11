// const { aliasWebpack } = require("react-app-alias");
const { alias, configPaths } = require("react-app-rewire-alias");

function override(config, env) {
  // New config, e.g. config.plugins.push...

  alias({
    ...configPaths("tsconfig.json"),
  })(config);

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
  ];

  return config;
}

module.exports = override;
