function Card({ children }) {
  return (
    <div style={{
      border: "2px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  );
}

export default Card;
