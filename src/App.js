import React, { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

function App() {
  const [searchField, setSearchField]= useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
      (async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setMonsters(users);
      })();
    }, []);

  const searchHandler = (e) => {
    setSearchField(e.target.value);
  }

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='search monsters' searchHandler={searchHandler} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
