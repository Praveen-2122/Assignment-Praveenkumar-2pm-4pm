import Footer from './Footer';
import Button from './Button';
import Card from './Card';
import './App.css'

function Product({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>₹{price}</p>
    </div>
  );
}

function ProfileCard() {
  return (
    <div>
      <h2>Praveen</h2>
      <p>Web Developer | Chennai</p>
    </div>
  );
}

function App() {
  const currentYear = 2026;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>React Day 32 Assignment</h1>  {/* Inline header */}
      
      <Button text="Click Me!" />
      
      <Card><ProfileCard /></Card>
      
      <Card>
        <Product name="React Course" price="999" />
      </Card>
      
      <Card>
        <Product name="Vite Pro" price="499" />
      </Card>
      
      <Footer year={currentYear} />
    </div>
  );
}

export default App;
