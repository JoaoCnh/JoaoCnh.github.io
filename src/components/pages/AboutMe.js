import React from "react";

import Centered from "../common/Centered";
import { Heading, SubHeading } from "../common/Headings";

export default ({ page }) => {
  return (
    <Centered horizontal>
      <Heading color={page.color}>Hello! My name is João Cunha</Heading>
      <SubHeading color={page.color}>
        I'm a Full-Stack developer working in Porto, Portugal.
      </SubHeading>
    </Centered>
  );
};
