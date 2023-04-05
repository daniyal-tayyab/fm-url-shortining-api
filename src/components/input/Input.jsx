import React, { useState } from "react";

import Button from "../button/Button";
import RecentUrl from "../recent-url/RecentUrl";

import {
  Container,
  InputContainer,
  RecentSection,
  ErrorMessage,
} from "./Input.styles";

import SnackBar from "../snackbar/SnackBar";

const Input = () => {
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(false);

  const handleUrl = (e) => {
    if (e.target.value == 0) {
      setUrlError(true);
      return;
    }
    setUrl(e.target.value);
    setUrlError(false);
  };

  const handleClick = () => {
    if (!url) {
      setUrlError(true);
      console.log(urlError);
      return;
    }

    const isValid = isValidURl(url);
    setIsValidUrl(true);
  };

  const isValidURl = (url) => {
    try {
      return Boolean(new URL(url));
    } catch (err) {
      return false;
    }
  };

  return (
    <>
      <Container>
        <InputContainer>
          <input
            placeholder="Shorten a link here..."
            onChange={handleUrl}
            aria-invalid={urlError}
          />
          <ErrorMessage>Please add a link</ErrorMessage>
          <Button type="inverted" shortBorder="true" handleClick={handleClick}>
            Shorten It!
          </Button>
        </InputContainer>
      </Container>
      <RecentSection>
        <RecentUrl />
        <RecentUrl />
        <RecentUrl />
      </RecentSection>
    </>
  );
};

export default Input;
