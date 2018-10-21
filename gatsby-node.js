exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  console.log("stage", stage);
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /jquery|hoverIntent|superfish|supersubs|fade|tinynav|custom.js/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
