import { useEffect, useState } from "react";
import Home from "./components/home/Home";
import { Container } from "./components/home/Home.styles";

function App() {
  // useEffect(() => {
  //   const longUrl =
  //     "https://www.example.com/long-article-title-with-many-words-and-hyphens-that-describes-a-specific-topic-in-great-detail";
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-RapidAPI-Key": "af75ccb7f3msh37e3db374d7e0dfp149657jsnbf0431651e8d",
  //       "X-RapidAPI-Host": "url-shortener23.p.rapidapi.com",
  //     },
  //     body: JSON.stringify({
  //       url: longUrl,
  //     }),
  //   };
  //   fetch("https://url-shortener23.p.rapidapi.com/shorten", options)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // }, []);

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
        <Home></Home>
      </Container>
    </>
  );
}

export default App;
