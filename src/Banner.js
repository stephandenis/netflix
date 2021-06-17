import axios from "./axios";
import { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  // it only fires when this component mounts, responsible for fetching the movie
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //generate a random number from 0 to the results that come back to pick a random movie
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  // n represents the number of characters before you want to cut them off and replace w ...
  // elipsis function - we protect if the string is undefined since we gonna fetch an api
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>

      {/* gives the fade effect to the bottom */}
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
