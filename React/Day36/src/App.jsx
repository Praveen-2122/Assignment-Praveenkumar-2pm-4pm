import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [windowSize, setWindowSize] = useState(0);
  const [data, setData] = useState("No data");

  //  useEffect that runs ONCE
  useEffect(() => {
    console.log("✅ Task 1: Runs once on page load");
  }, []);

  //  useEffect that runs on state change
  useEffect(() => {
    console.log("✅ Task 2: Count changed to", count);
  }, [count]);

  //  Document title change
  useEffect(() => {
    document.title = `Count: ${count} - React Day 36`;
  }, [count]);

  //  Mock data fetch (runs once)
  useEffect(() => {
    // Fake API call
    setTimeout(() => {
      setData("✅ Mock data loaded!");
    }, 1000);
  }, []);

  //  Timer with CLEANUP
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("✅ Task 3: Timer tick");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("✅ Timer cleaned up!");
    };
  }, []);

  //  Window resize event
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run once on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //  Dependency MISTAKE example (fixed)
  useEffect(() => {
    console.log("✅ Task 4: Fixed dependency [count]");
  }, [count]); // ✅ CORRECT - count is in deps

  return (
    <div style={{ 
      padding: "30px", 
      maxWidth: "600px", 
      margin: "0 auto",
      fontFamily: "Arial"
    }}>
      <h1> ALL 10 useEffect Tasks</h1>
      
      {/* Task Display */}
      <div style={{ 
        background: "#f0f8ff", 
        padding: "20px", 
        borderRadius: "10px", 
        margin: "20px 0" 
      }}>
        <h2>Counter: <span style={{color: "#007bff"}}>{count}</span></h2>
        <button onClick={() => setCount(count + 1)} 
                style={{padding: "10px 20px", margin: "5px"}}>
          +
        </button>
        <button onClick={() => setCount(count - 1)} 
                style={{padding: "10px 20px", margin: "5px"}}>
          -
        </button>
        <p>📱 Window: {windowSize}px (Resize browser!)</p>
        <p>📡 Data: {data}</p>
      </div>

      {/* Task Summary */}
      <div style={{ 
        background: "#e8f5e8", 
        padding: "15px", 
        borderRadius: "8px" 
      }}>
        <h3>✅ ALL TASKS WORKING:</h3>
        <ol style={{ margin: 0 }}>
          <li>useEffect runs once → Check console</li>
          <li>useEffect on count → Console + title</li>
          <li>Timer cleanup → Console every 1s</li>
          <li>Dependency fixed → Console shows</li>
          <li><b>Document title</b> → Check browser tab ↑</li>
          <li>Mock data → "Mock data loaded!"</li>
          <li>Window resize → Width changes</li>
          <li>Effect order → Console logs</li>
          <li>No infinite loops → Stable</li>
          <li>All cleanup → No memory leaks</li>
        </ol>
      </div>

      <div style={{ 
        marginTop: "20px", 
        padding: "10px", 
        background: "#fff3cd", 
        borderRadius: "5px",
        fontSize: "14px"
      }}>
        <strong>Execution Order:</strong> Render → Effect 1 → Effect 2 → Effect 3 → ...
      </div>
    </div>
  );
}

export default App;
