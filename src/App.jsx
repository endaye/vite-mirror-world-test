import { useState } from "react";
import { MirrorWorld, Ethereum, Sui } from "@mirrorworld/web3.js";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const mirrorworld = new MirrorWorld({
  apiKey: import.meta.env.VITE_APP_MIRROR_WORLD_API_KEY,
  chainConfig: Sui("mainnet"),
});

const App = () => {
  const [count, setCount] = useState(0);

  const loginEthereum = async () => {
    mirrorworld.chainConfig = Ethereum("mainnet");
    const { refreshToken, user } = await mirrorworld.login();
    console.debug(refreshToken, user);
  };

  const loginSui = async () => {
    mirrorworld.chainConfig = Sui("mainnet");
    const { refreshToken, user } = await mirrorworld.login();
    console.debug(refreshToken, user);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div id="gw-social">
        <button onClick={loginEthereum}>ETH</button>
        <button onClick={loginSui}>SUI</button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default App;
