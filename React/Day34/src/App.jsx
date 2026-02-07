import { useState } from 'react';
import './App.css';

function App() {
  // State for toggle
  const [showList, setShowList] = useState(true);
  
  // 🧪 Simple Tasks Data
  const cities = ["Chennai", "Mumbai", "Delhi", "Bangalore", "Hyderabad"];
  const isLoggedIn = true;

  // 🛠️ Practical Tasks Data
  const todos = [
    { id: 1, task: "Learn React", done: false },
    { id: 2, task: "Build Vite app", done: true },
    { id: 3, task: "Practice hooks", done: false }
  ];

  const products = [
    { id: 1, name: "React Course", price: 999 },
    { id: 2, name: "Vite Pro", price: 499 },
    { id: 3, name: "JS Masterclass", price: 1299 }
  ];

  const users = [
    { id: 1, name: "Kumar", role: "Developer" },
    { id: 2, name: "Ravi Singh", role: "Designer" },
    { id: 3, name: "Priyan M", role: "Manager" }
  ];

  return (
    <div style={{ 
      padding: "20px", 
      maxWidth: "800px", 
      margin: "0 auto",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>React Day 34 - Conditional & Lists</h1>

      {/*  Logged In/Out Message (Ternary) */}
      <div style={{ margin: "20px 0", padding: "15px", background: "#f0f8ff" }}>
        <h3>Status:</h3>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          {isLoggedIn ? "✅ Logged In" : "🔒 Please Login"}
        </p>
      </div>

      {/*  Cities List with Keys */}
      <div style={{ margin: "20px 0", padding: "15px", background: "#f9f9f9" }}>
        <h3>🏙️ Cities</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cities.map((city, index) => (
            <li key={index} style={{ padding: "5px 0" }}>
              📍 {city}
            </li>
          ))}
        </ul>
      </div>

      {/*  Logical AND Message */}
      {cities.length > 0 && (
        <div style={{ margin: "20px 0", color: "green" }}>
          <h4>✅ Data Available!</h4>
        </div>
      )}

      {/* Toggle List Visibility */}
      <button 
        onClick={() => setShowList(!showList)}
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px"
        }}
      >
        {showList ? "Hide Lists" : "Show Lists"}
      </button>

      {/*  Todo List */}
      {showList && (
        <div style={{ margin: "20px 0", padding: "15px", background: "#e8f5e8" }}>
          <h3>📝 Todo List</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {todos.map((todo) => (
              <li key={todo.id} style={{ 
                padding: "8px", 
                background: todo.done ? "#d4edda" : "#fff3cd",
                margin: "5px 0",
                borderRadius: "4px"
              }}>
                ⭕ {todo.task} {todo.done && "(Done ✅)"}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/*  Product List with Price */}
      {showList && (
        <div style={{ margin: "20px 0", padding: "15px", background: "#fff3cd" }}>
          <h3>🛒 Products</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            {products.map((product) => (
              <div key={product.id} style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "center"
              }}>
                <h4>{product.name}</h4>
                <p style={{ fontSize: "20px", color: "#28a745", fontWeight: "bold" }}>
                  ₹{product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/*  User List */}
      {showList ? (
        <div style={{ margin: "20px 0", padding: "15px", background: "#d1ecf1" }}>
          <h3>👥 Users</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map((user) => (
              <li key={user.id} style={{
                padding: "10px",
                background: "#fff",
                margin: "5px 0",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between"
              }}>
                <span>{user.name}</span>
                <span style={{ color: "#17a2b8" }}>{user.role}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "40px", color: "#6c757d" }}>
          <h3>No data to display</h3>
          <p>Click "Show Lists" to view content</p>
        </div>
      )}

      {/* Summary */}
      <div style={{ 
        marginTop: "30px", 
        padding: "15px", 
        background: "#f8f9fa",
        borderRadius: "5px",
        fontSize: "14px"
      }}>
        <p> All tasks complete:</p>
        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <li>Ternary, &&, Lists with keys</li>
          <li>Toggle visibility with state</li>
          <li>Todo, Product, User lists</li>
          <li>Conditional "No data" message</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
