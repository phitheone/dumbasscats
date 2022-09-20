import banner from "./images/bnr.png";
import catdc from "./images/catdiscord.png";
import cattw from "./images/cattwitter.png";
import catlmntf from "./images/catLMNFT.png";

function App() {
  return (
    <div className="App">
      <div className="BannerContainer">
        <img src={banner} />
      </div>
      <div className="CatsContainer">
        <a href="https://twitter.com/Dumbass_cats" target="_blank">
          <img className="CatT" src={cattw} />
        </a>
        <a href="https://discord.gg/JYwJsTTpjQ" target="_blank">
          <img className="CatD" src={catdc} />
        </a>
        <a href="/" target="_blank">
          <img className="CatL" src={catlmntf} />
        </a>
      </div>
    </div>
  );
}

export default App;
