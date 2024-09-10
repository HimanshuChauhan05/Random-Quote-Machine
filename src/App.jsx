import React, { useState, useEffect } from "react";
import "./App.css"; 

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");


  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

 
  useEffect(() => {
    fetchQuote();
  }, []);

  
  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"{quote}"</p>
        <p id="author">- {author}</p>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote}" - ${author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>

          <button id="new-quote" onClick={handleNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
