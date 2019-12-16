import React from "react";
import "./App.scss";
import { initsnow } from "./components/snow";
import ReactPlayer from "react-player";
import { images } from "./assets";
import { playList } from "./assets";

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            snowPileHeight: 40,
            playingSong: 0,
            playing: true,
        };
    }
    componentDidMount() {
        initsnow();
        this.setState({ playing: true });
    }

    hideSnowPile = () => {
        const { snowPileHeight } = this.state;
        if (snowPileHeight === 0) {
            this.setState({ snowPileHeight: 40 });
        } else {
            this.setState({ snowPileHeight: 0 });
        }
    };

    handleEndSong = () => {
        const { playingSong } = this.state;
        if (playingSong === playList.length - 1) {
            this.setState({ playingSong: 0 });
        } else {
            this.setState({ playingSong: playingSong + 1 });
        }
    };

    handleReadyPlay = () => {
        this.setState({ playing: true });
    };
    render() {
        const { playingSong, playing } = this.state;
        return (
            <div className="app-root">
                <small className="author-name">
                    Hoang Vy Nguyen wishes you a Merry Christmas!
                </small>
                <ReactPlayer
                    className="player-wrapper"
                    url={playList[playingSong]}
                    playing={playing}
                    controls
                    onReady={this.handleReadyPlay}
                    onEnded={this.handleEndSong}
                />
                <img
                    src={images.reindeerSantaClaus}
                    className="reindeer-santa-claus-img"
                />
                <div className="full-moon-img" />
                <img src={images.snowPile} className="snow-pile-bottom" />
                <div className="bottom-control">
                    {/* <button onClick={this.hideSnowPile}>
                        Toggle Snow Pile
                    </button> */}
                    <button onClick={this.handleEndSong}>Next</button>
                </div>
            </div>
        );
    }
}

export default App;
