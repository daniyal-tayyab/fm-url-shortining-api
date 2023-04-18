import React, { useState } from "react";

import { useSnackbar } from "notistack";

import Button from "../button/Button";
import RecentUrl from "../recent-url/RecentUrl";

import {
  Container,
  InputContainer,
  RecentSection,
  ErrorMessage,
  SnackbarMessage,
} from "./Input.styles";

const Input = () => {
  const [url, setUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [recentUrls, setRecentUrls] = useState([]);
  const [urlError, setUrlError] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleUrl = (e) => {
    if (e.target.value == 0) {
      setUrlError(true);
      return;
    }
    setUrl(e.target.value);
    setUrlError(false);
  };

  const handleValidate = () => {
    if (!url) {
      let variant = "error";
      enqueueSnackbar(<SnackbarMessage>Invalid URL!</SnackbarMessage>, {
        variant,
      });
      return;
    }

    const isValid = isValidURl(url);

    setIsValidUrl(isValid);
    if (!isValid) {
      let variant = "error";
      enqueueSnackbar(<SnackbarMessage>Invalid URL!</SnackbarMessage>, {
        variant,
      });
      return;
    }
    let variant = "success";
    enqueueSnackbar(<SnackbarMessage>Valid URL!</SnackbarMessage>, { variant });
  };

  const isValidURl = (url) => {
    try {
      return Boolean(new URL(url));
    } catch (err) {
      return false;
    }
  };

  const handleShorten = () => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "af75ccb7f3msh37e3db374d7e0dfp149657jsnbf0431651e8d",
        "X-RapidAPI-Host": "url-shortener23.p.rapidapi.com",
      },
      body: JSON.stringify({
        url: url,
      }),
    };
    fetch("https://url-shortener23.p.rapidapi.com/shorten", options)
      .then((response) => response.json())
      .then((response) => {
        console.log("SHORT URL: ", response.short_url);
        let urls = { longUrl: url, shortUrl: response.short_url };
        setRecentUrls([...recentUrls, urls]);
      })
      .catch((err) => console.error(err));

    setUrl("");
    setIsValidUrl(false);
  };

  return (
    <>
      <Container>
        <InputContainer>
          <input
            placeholder="Shorten a link here..."
            onChange={handleUrl}
            aria-invalid={urlError}
            value={url}
          />
          <ErrorMessage>Please add a link</ErrorMessage>
          {isValidUrl ? (
            <Button
              type="inverted"
              shortBorder="true"
              handleClick={handleShorten}
            >
              Shorten
            </Button>
          ) : (
            <Button
              type="inverted"
              shortBorder="true"
              handleClick={handleValidate}
            >
              Validate
            </Button>
          )}
        </InputContainer>
      </Container>
      <RecentSection>
        {recentUrls.map((url, index) => (
          <RecentUrl key={index} url={url} />
        ))}
      </RecentSection>
    </>
  );
};

export default Input;
