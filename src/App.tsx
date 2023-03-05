import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [version, setVersion] = useState("");

  useEffect(() => {
    (async () => {
      const time = Date.now();
      const version = await invoke("get_version");
      setVersion(`${version as string} (runtime: ${Date.now() - time} ms)`);
       
    })()
  }, []);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Terrari</h1>
      <h5>App version {version}</h5>

      <div className="row">
        <img src="/terrari.png" className="terarri" alt="Terarri logo" width="150px" />
      </div>

      <p>Lightweight Cloud Resource Manager</p>

    </div>
  );
}

export default App;
