import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>QR Code <span>Generator </span> </h2>

        <div className="qrcode-content">
          <QRCode value={text} />
        </div>

        <div className="input">
          <p>Enter QR value here</p>

          <input
            type="text"
            value={text}
            onChange={(e) => {
              handleChange(e);
            }}
            className="text-content"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
