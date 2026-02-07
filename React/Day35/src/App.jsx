import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email) {
      alert("Email required!");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password too short!");
      return;
    }
    if (!agree) {
      alert("Please agree to terms!");
      return;
    }
    
    alert(`Login: ${formData.email}`);
    setFormData({ email: "", password: "" });
    setAgree(false);
  };

  return (
    <div style={{ 
      maxWidth: "400px", 
      margin: "50px auto", 
      padding: "20px" 
    }}>
      <h2>Login Form</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          style={{ width: "100%", padding: "10px", margin: "5px 0" }}
        />
        
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          style={{ width: "100%", padding: "10px", margin: "5px 0" }}
        />
        
        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          Agree to terms
        </label>
        
        <button type="submit" style={{ 
          width: "100%", 
          padding: "12px", 
          background: "#007bff", 
          color: "white",
          border: "none"
        }}>
          Login
        </button>
      </form>
      
      <p style={{ marginTop: "20px", color: "#666" }}>
        Email: {formData.email}
      </p>
    </div>
  );
}

export default App;
