import React from "react";
import "./App.scss";
import { initsnow } from "./components/snow";
import ReactPlayer from "react-player";
import { images } from "./assets";
import { audios, playList } from "./assets";

function App() {
    initsnow();
    return (
        <div className="app-root">
            <small className="author-name">
                Hoang Vy Nguyen wishes you a Merry Christmas!
            </small>
            <ReactPlayer
                className="player-wrapper"
                url={playList}
                controls
                loop
                playing
            />
            <img
                src={images.snowPile}
                className="snow-pile-bottom"
                style={{ height: "40%" }}
            />
        </div>
    );
}

export default App;
