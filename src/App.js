import React, { useEffect } from 'react';

function App() {
  let randomNumber;


  // Now, you can call the function when needed
  useEffect(() => {
    const generateRandomNumber = () => {
      randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
      console.log("Random Number:", randomNumber);
    };
    generateRandomNumber();
  }, [randomNumber])



  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Master Debugging</h1>
      <button  style={{ padding: '8px 16px', marginTop: '10px' }}>
        Generate Random Number
      </button>
    </div>
  );
}

export default App;
