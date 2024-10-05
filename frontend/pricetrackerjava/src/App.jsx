import React, { useState } from "react";
import Card from "./Card";
import './App.css'; // For general styling

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([
    { title: "Amazon", price: 99, link: "https://www.amazon.com" },
    { title: "Snapdeal", price: 89, link: "https://www.snapdeal.com" },
    { title: "eBay", price: 79, link: "https://www.ebay.com" },
    { title: "Walmart", price: 69, link: "https://www.walmart.com" },
  ]);

  const handleSearch = () => {
    // Filter results based on searchQuery (mock search logic for now)
    const filteredResults = results.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="app">
      <h1>Price Checker</h1>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="card-container">
        {results.map((result, index) => (
          <Card key={index} title={result.title} price={result.price} link={result.link} />
        ))}
      </div>
    </div>
  );
}

export default App;
