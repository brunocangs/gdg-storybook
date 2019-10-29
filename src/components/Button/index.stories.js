import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from ".";

storiesOf("Button", module)
  .add("Base", () => <Button>Clica em mim!</Button>)
  .add("Com Actions", () => (
    <Button onClick={action("Clique no botão")}>Clica em mim!</Button>
  ));
