import './App.css'


function App() {

  //Use a variable inside JSX

  const myAge = 23;  

  return (
    <>

      {/* Modify App.jsx to display your name */}
      <h1>Hello, I'm Praveen!</h1>  
      
      {/* Add a paragraph using JSX */}
      
      <p>This is my first React app with Vite.</p>  
      
      <p>Age: {myAge}</p>  
    </>
  )
}

export default App
