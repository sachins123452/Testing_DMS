// .eslintrc.js
module.exports = {
  extends: ['react-app'],
    // Other ESLint configurations...
    env: {
      browser: true,
      serviceworker: true, // Add this line to recognize service worker globals
    },
  };
  