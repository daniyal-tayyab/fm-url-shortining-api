import React from "react";

import { Container, Original, Shorten } from "./RecentUrl.styles";
import Button from "../button/Button";

const RecentUrl = () => {
  return (
    <Container>
      <Original>https://www.longlink.hanglong.com/hang</Original>
      <Shorten>
        <p>https://short/link</p>
        <Button type="inverted" shortBorder="true">
          Copy
        </Button>
      </Shorten>
    </Container>
  );
};

export default RecentUrl;
