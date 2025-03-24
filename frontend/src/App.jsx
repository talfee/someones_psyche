import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NewEntryForm from './components/NewEntryForm';
import JournalEntry from './components/JournalEntry';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/entries')
      .then(res => {
        setEntries(res.data);
      })
      .catch(err => {
        console.error('Failed to fetch entries:', err);
      });
  }, []);

  const handleAddEntry = (newEntry) => {
    setEntries([newEntry, ...entries]); 
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="profile-circle">
          <img src="/image.jpg" alt="profile" />
        </div>
        <h1 className="title">prettier substack :D</h1>
        <NewEntryForm onAddEntry={handleAddEntry} />
      </div>
  
      <div className="main-feed">
        <div className="background-image-wrapper">
          <img
            className="background-image"
            src="/image.jpg"
            alt="window background"
          />
        </div>
  
        <div className="masonry-grid">
          {entries.map((entry, index) => (
            <JournalEntry key={index} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default App;
