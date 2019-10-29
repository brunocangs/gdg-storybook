import { storiesOf } from "@storybook/react";
import React from "react";
import { Card } from ".";
import { text } from "@storybook/addon-knobs";

storiesOf("Card", module)
  .add("Base", () => (
    <Card>
      <h1>Título</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
        itaque iusto nobis odio! Accusamus, quia!
      </p>
    </Card>
  ))
  .add("With Knobs", () => (
    <Card>
      <h1>Título</h1>
      <p>
        {text(
          "Texto",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi itaque iusto nobis odio! Accusamus, quia!"
        )}
      </p>
    </Card>
  ));
