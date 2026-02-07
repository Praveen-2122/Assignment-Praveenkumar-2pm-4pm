import { useState } from 'react';
import './App.css';

function Profile() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h3>Arun Kumar</h3>
      <p>Junior React Developer | Chennai</p>
    </div>
  );
}

function App() {
  //  Practice Tasks - Multiple States
  const [count, setCount] = useState(0);           // Counter
  const [text, setText] = useState("");            // Input
  const [showProfile, setShowProfile] = useState(false);  // Toggle
  const [buttonText, setButtonText] = useState("Click to Change");  // Button text
  const [theme, setTheme] = useState("light");     // Light/Dark toggle

  // Theme styles
  const appStyle = {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    background: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    minHeight: "100vh"
  };

  return (
    <div style={appStyle}>
      <h1>React Day 33 - State & Events</h1>

      {/* 1. Counter with + / - / Reset */}
      <div style={{ margin: "20px 0", padding: "20px", border: "1px solid #ddd" }}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {/*  2. Toggle Profile */}
      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide" : "Show"} Profile
      </button>
      {showProfile && <Profile />}

      {/*  3. Input Preview */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your name..."
          style={{ padding: "10px", width: "200px", marginRight: "10px" }}
        />
        <p>You typed: {text || "Nothing yet!"}</p>
      </div>

      {/*  4. Dynamic Button Text */}
      <button onClick={() => setButtonText("Changed Again!")}>
        {buttonText}
      </button>

      {/*  5. Light/Dark Toggle */}
      <button 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ 
          marginTop: "20px", 
          padding: "10px 20px",
          background: theme === "dark" ? "#fff" : "#000",
          color: theme === "dark" ? "#000" : "#fff"
        }}
      >
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {/* Summary */}
      <div style={{ marginTop: "30px", fontSize: "14px", opacity: 0.7 }}>
        <p>📊 States used: 5 (count, text, showProfile, buttonText, theme)</p>
        <p>🎯 All practice + practical tasks complete!</p>
      </div>
    </div>
  );
}

export default App;
