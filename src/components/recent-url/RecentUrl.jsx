import React, { useState } from "react";

import { Container, Original, Shorten } from "./RecentUrl.styles";
import Button from "../button/Button";

const RecentUrl = ({ url }) => {
  const { longUrl, shortUrl } = url;
  const [buttonText, setButtonText] = useState("Copy");

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shortUrl);
    }
  };

  const handleClick = () => {
    setButtonText("Copied");
  };

  return (
    <Container>
      <Original>{longUrl}</Original>
      <Shorten>
        <p>{shortUrl}</p>
        <Button
          type="inverted"
          shortBorder="true"
          handleClick={() => {
            copyToClipboard();
            handleClick();
          }}
        >
          {buttonText}
        </Button>
      </Shorten>
    </Container>
  );
};

export default RecentUrl;
