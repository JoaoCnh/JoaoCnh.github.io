import React from "react";

import Centered from "../../common/flex/Centered";
import MaxWidth from "../../common/flex/MaxWidth";
import { Heading, SubHeading } from "../../common/Headings";
import Link from "../../common/links/Link";

export default ({ page }) => {
  return (
    <Centered horizontal>
      <MaxWidth width={1280}>
        <Heading headingColor={page.color}>Made by amazing people</Heading>
        <SubHeading>
          This design was 100% inspired by what{" "}
          <Link
            linkColor={page.color}
            href="https://twitter.com/CompuIves"
            target="_blank"
          >
            Ives van Hoorne
          </Link>{" "}
          did @{" "}
          <Link
            linkColor={page.color}
            href="https://codesandbox.io"
            target="_blank"
          >
            CodeSandbox.io
          </Link>
        </SubHeading>
        <SubHeading>
          I was intrigued by the amazing design. I knew he had done it with
          React so I asked myself one question. HOW?
        </SubHeading>
        <SubHeading>
          I wanted to learn and so I went into the source code to figure it out.
          I ended up entering on a journey learning a lot more stuff than I
          initially expected.
        </SubHeading>
        <SubHeading>
          I ended up falling in love with{" "}
          <Link
            linkColor={page.color}
            href="https://www.styled-components.com/"
            target="_blank"
          >
            Styled Components
          </Link>{" "}
          and started customizing a lot of stuff to fit my vision.
        </SubHeading>
        <iframe
          src="https://codesandbox.io/embed/new"
          style={{
            width: "100%",
            height: 500,
            border: 0,
            borderRadius: 4,
            overflow: "hidden"
          }}
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
        <SubHeading>
          Please feel free to explore their work. It's amazing!
        </SubHeading>
      </MaxWidth>
    </Centered>
  );
};
