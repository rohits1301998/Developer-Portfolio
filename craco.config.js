const CracoAlias = require("craco-alias");
const CracoEnvPlugin = require('craco-plugin-env');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from jsconfig
        baseUrl: "./src"
      }
    },
    {
        plugin: CracoEnvPlugin,
        options: {
          variables: {
            REACT_APP_BUILD_VERSION: Date.now()
          }
        }
      }
  ]
};