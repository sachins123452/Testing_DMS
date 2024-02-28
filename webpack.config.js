// webpack.config.js

const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  // Other webpack configurations...

  plugins: [
    // Other plugins...

    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      // Include other configurations as needed
    }),
  ],
};
