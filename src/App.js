import React, {useState} from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('Click the button below');
  const [author, setAuthor] = useState('Me');
  const endpoint ='https://type.fit/api/quotes';

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1644);
    return randomNumber;
  }

  const fetchQuote = () => {
    const randomNumber = generateRandomNumber();
    const quote = fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        setQuote(response[randomNumber].text);
        setAuthor(response[randomNumber].author);
      });
    return quote;
  }

  return (
    <div className="App">
      <div className="quote">
        <h2>" {quote} "</h2>
        <small> - {author}</small>
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
