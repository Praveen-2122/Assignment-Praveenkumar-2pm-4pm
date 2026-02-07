function Footer({ year }) {
  return (
    <footer style={{ 
      background: "#333", 
      color: "white", 
      padding: "20px", 
      textAlign: "center"
    }}>
      <p>© {year} My App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
