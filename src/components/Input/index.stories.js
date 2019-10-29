import { storiesOf } from "@storybook/react";
import { Input } from ".";
import React, { useState } from "react";
import { text } from "@storybook/addon-knobs";

const Controlled = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Input
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
      <p>{value}</p>
    </>
  );
};

storiesOf("Input", module)
  .add("Normal", () => <Input />)
  .add("Controlled", () => {
    return <Controlled />;
  })
  .add("Com Knobs", () => <Input value={text("Value", "Inicial")} />, {
    notes: `
        # Sabia que é Markdown?

        Então quer dizer que da pra fazer:

        - Lista
        - [Link](https://google.com)
        - \`código\`

        \`\`\`javascript
            let desc = 'até coisa assim';
            \`\`\`
    `
  });
