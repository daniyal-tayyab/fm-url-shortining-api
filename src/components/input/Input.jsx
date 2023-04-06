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
import Loader from "../spinner-loader/Loader";
import { useEffect } from "react";

const Input = () => {
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [recentUrls, setRecentUrls] = useState([]);

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
      setUrlError(true);
      return;
    }

    const isValid = isValidURl(url);

    setIsValidUrl(isValid);
    setIsSnackOpen(true);
  };

  const isValidURl = (url) => {
    try {
      return Boolean(new URL(url));
    } catch (err) {
      return false;
    }
  };

  const handleShorten = () => {
    console.log("shorten clicked");
    // const longUrl =
    //   "https://www.example.com/long-article-title-with-many-words-and-hyphens-that-describes-a-specific-topic-in-great-detail";
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
    setUrlError(false);
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

      <SnackBar
        open={isSnackOpen}
        setOpen={setIsSnackOpen}
        isValidUrl={isValidUrl}
      />
    </>
  );
};

export default Input;
