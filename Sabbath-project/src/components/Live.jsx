// Live.jsx
import React, { useState, useEffect } from 'react';
import './Live.css';

const Live = ({ artistName = "TYLA" }) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockShows = [
      {
        id: 1,
        date: "JUL 2, 2025",
        event: "National Youth Jazz Festival (NYJF)",
        location: "Makhanda",
        ticketUrl: "https://tickets.nationalartsfestival.co.za/about-us/"
      },
      {
        id: 2,
        date: "JUL 3, 2025",
        event: "Art in Jazz",
        location: "Cape Town",
        ticketUrl: "https://www.quicket.co.za/events/317183-art-in-jazz-20-jazz-according-to-the-feminine/#/ "
      },
      {
        id: 3,
        date: "SEPT 27, 2025",
        event: "Joy of jazz",
        location: "Johannesburg",
        ticketUrl: "https://www.ticketmaster.co.za/artist/standard-bank-joy-of-jazz-tickets/1289173"
      },
     
    ];

    const timer = setTimeout(() => {
      setShows(mockShows);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="live-container">
        <div className="loading-shows">
          <div className="loading-spinner"></div>
          <p>Loading upcoming shows...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="live-container">
      <h2>Shows</h2>
      <div className="shows-row">
        {shows.map((show) => (
          <div key={show.id} className="show-card">
            <div className="show-details">
              <div className="show-date">{show.date}</div>
              <div className="show-event">{show.event}</div>
              <div className="show-location">{show.location}</div>
            </div>
            <a
              href={show.ticketUrl}
              className="ticket-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              TICKETS
            </a>
          </div>
        ))}
      </div>
      <div className="notification-cta">
        <p>Get notified when new events are announced in your area</p>
        
      </div>
    </div>
  );
};

export default Live;
