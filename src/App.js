import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const endpoint ='https://type.fit/api/quotes';

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then(({text, author}) => {
        setQuote(text);
        setAuthor(author);
      })
  }, []);

  let fetchQuote = () => {
    fetch(endpoint)
      .then((response) => response.json())
      .then(({text, author}) => {
        setQuote(text);
        setAuthor(author);
      })
  }

  return (
    <div className="App">
      <div className="quote">
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div><br />
      <button
        className="button"
        onClick={fetchQuote}
      >
        Generate New Quote
      </button>
    </div>
  );
}

export default App;
