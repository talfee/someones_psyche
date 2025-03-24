import React from 'react';
// import './JournalEntry.css';

function JournalEntry({ entry }) {
  return (
    <div className="journal-entry">
      <div className="entry-header">
        <img src="/image.jpg" alt="avatar" className="entry-avatar" />
        <div>
          <strong>{entry.author}</strong>
          <div className="entry-date">{entry.date}</div>
        </div>
      </div>
      <p className="entry-content">{entry.content}</p>

      <div className="entry-actions">
        <button>❤️</button>
        <button>📝</button>
        <button>📎</button>
        <button>💬</button>
      </div>
    </div>
  );
}

export default JournalEntry;
