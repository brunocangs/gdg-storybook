import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { themes } from "@storybook/theming";
import React from "react";

addDecorator(withKnobs);
addDecorator(fn => <div style={{ background: "white" }}>{fn()}</div>);
addParameters({
  options: {
    theme: themes.dark
  }
});
// automatically import all files ending in *.stories.js
configure(require.context("../src/components", true, /\.stories\.js$/), module);

module.exports = ({ config }) => {
  console.log("?");
  return config;
};
