const autoprefixer = require("autoprefixer");
const { plugin } = require("postcss");

module.exports = {
  plugin: [
    require('tailwindcss')('./tailwind.config'),
    require(autoprefixer)
  ]
}
