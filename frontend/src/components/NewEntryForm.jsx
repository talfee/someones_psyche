import React, { useState } from 'react';
import axios from 'axios';
// import './NewEntryForm.css';

function NewEntryForm({ onAddEntry }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === '') return;

    const newEntry = {
      content: text,
      author: 'someoneespsyche'
    };

    try {
      const res = await axios.post('http://localhost:3001/entries', newEntry);
      onAddEntry(res.data); 
      setText('');
    } catch (err) {
      console.error('Error saving entry:', err);
    }
  };

  return (
    <form className="new-entry-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="what’s happening?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="3"
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default NewEntryForm;
