import React, { useState } from "react";
import "./App.css";
import { InputGroup, Input } from "reactstrap";
import Navigation from "./components/header.js";
import logo from "./dad.svg";
import Footer from "./components/footer.js";

const api = {
  key: "b9caa1e19a07fcc46b6ec58d60d94409",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="dad logo" style={{ maxWidth: "200px" }}></img>
            <h1 className="mt-4">Dad Weather</h1>
            <h2 className="mt-4 mb-5">
              A simple weather app, but with dad jokes.
            </h2>
          </div>
          <InputGroup>
            <Input
              className="mb-4"
              style={{ maxWidth: "300px", margin: "auto" }}
              type="text"
              placeholder="Search by City"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </InputGroup>
          {typeof weather.main != "undefined" ? (
            <div className="mt-4">
              {weather.weather[0].icon === "01d" ? (
                <div>
                  Did you hear about the woman who wore sunglasses? <br />
                  She had a very dim view of things.
                </div>
              ) : weather.weather[0].icon === "01n" ? (
                <div>
                  What falls but never hits the ground? <br />
                  The temperature.
                </div>
              ) : weather.weather[0].icon === "03d" ? (
                <div>
                  What is a Queens favorite kind of precipitation? <br />
                  Reign!
                </div>
              ) : weather.weather[0].icon === "03n" ? (
                <div>
                  Q: Why did the man use ketchup in the rain?
                  <br />
                  Because it was raining cats and hot dogs
                </div>
              ) : weather.weather[0].icon === "04d" ? (
                <div>
                  Where do lightning bolts go on dates? <br />
                  To cloud nine.
                </div>
              ) : weather.weather[0].icon === "04n" ? (
                <div>
                  What did the evaporating raindrop say? <br />
                  I'm going to pieces.
                </div>
              ) : weather.weather[0].icon === "09d" ? (
                <div>
                  Why does Snoop Dogg need an umbrella? <br />
                  Fo’ drizzle.
                </div>
              ) : weather.weather[0].icon === "09n" ? (
                <div>
                  What does it do before it rains candy? <br />
                  It sprinkles!
                </div>
              ) : weather.weather[0].icon === "10d" ? (
                <div>
                  What do you call it when it’s pouring ducks and geese? <br />
                  Fowl weather!
                </div>
              ) : weather.weather[0].icon === "10n" ? (
                <div>
                  What do you call a bear that got caught in a storm? <br />A
                  drizzly bear.
                </div>
              ) : weather.weather[0].icon === "11d" ? (
                <div>
                  What does a weatherman wear under his trousers? <br />
                  Thunderpants.
                </div>
              ) : weather.weather[0].icon === "13d" ? (
                <div>
                  What do you call a snowman that tells tall tales? <br />A
                  snow-fake!
                </div>
              ) : weather.weather[0].icon === "50d" ? (
                <div>
                  What happens when the fog lifts in California? <br />
                  UCLA!
                </div>
              ) : (
                <div>
                  What does everyone listen to, but no one believes? <br />
                  The weather reporter. ({weather.weather[0].icon})
                </div>
              )}
              <div className="location mt-4">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="temp">{Math.round(weather.main.temp)}°F</div>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              ></img>
              <div className="weather mb-5">{weather.weather[0].main}</div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
