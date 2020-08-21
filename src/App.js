import React from "react";
import axios from "axios";
import Header from "./components/header";
import Search from "./components/Search";
import CharacterItem from "./components/characterItem";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterItem items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
