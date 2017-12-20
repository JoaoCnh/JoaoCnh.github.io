const Dotenv = require("dotenv-webpack");

module.exports = {
  type: "react-app",
  webpack: {
    extra: {
      plugins: [new Dotenv()]
    }
  }
};
