import React from 'react';
import './Podcast.css';
import gabiabout from '../assets/gabiabout.jpg';

const episodes = [
  {
    id: '001',
    title: 'Episode 1 - The Black Adhan',
    link: 'https://embed.podcasts.apple.com/tr/podcast/episode-1-the-black-adhan/id1796275927?i=1000692059174',
    platform: 'Apple Podcasts',
  },
  {
    id: '002',
    title: 'Episode 2 - Order my steps',
    link: 'https://embed.podcasts.apple.com/tr/podcast/episode-2-order-my-steps/id1796275927?i=1000696232841',
    platform: 'Apple Podcasts',
  },
  {
    id: '003',
    title: 'Episode 3 - Ntate Motuba’s Requiem',
    link: 'https://embed.podcasts.apple.com/tr/podcast/episode-3-ntate-motubas-requiem/id1796275927?i=1000699591620',
    platform: 'Apple Podcasts',
  },
  {
    id: '004',
    title: 'Episode 4 - The Sabbath Movement (1-3)',
    link: 'https://embed.podcasts.apple.com/tr/podcast/episode-4-the-sabbath-movement-1-3/id1796275927?i=1000701224916',
    platform: 'Apple Podcasts',
  },
  {
    id: '005',
    title: 'Episode 5 - This is the First Truth',
    link: 'https://embed.podcasts.apple.com/tr/podcast/episode-6-the-law-of-first-mention/id1796275927?i=1000703140753',
    platform: 'Apple Podcasts',
  },
 
  {
    id: '007',
    title: 'Episode 1 - The Black Adhan',
    link: 'https://open.spotify.com/embed/episode/2Y0bgiKtsomroHcGSPd0XX',
    platform: 'Spotify',
  },
  {
    id: '008',
    title: 'Episode 2 - Order my steps',
    link: 'https://open.spotify.com/embed/episode/0KUV8rNHB5M0SHXHLSIaiU',
    platform: 'Spotify',
  },
  {
    id: '009',
    title:' Episode 3 - Ntate Motuba’s Requiem',
    link: 'https://open.spotify.com/embed/episode/3CAKi5eoGEMjs4bk3FtxW1',
    platform: 'Spotify',
  },
  {
    id: '010',
    title: 'Episode 4 - The Sabbath Movement (1-3)',
    link: 'https://open.spotify.com/embed/episode/4rfyYP9xGA2wQnYCjYkqOz',
    platform: 'Spotify',
  },
  {
    id: '011',
    title: 'Episode 5 - This is the First Truth',
    link: 'https://open.spotify.com/embed/episode/36vbCahSDILVCc0gnGyMNo',
    platform: 'Spotify',
  },

];



const Podcast = () => {
  const appleEpisodes = episodes.filter((ep) => ep.platform === 'Apple Podcasts');
  const spotifyEpisodes = episodes.filter((ep) => ep.platform === 'Spotify');

  return (
    <div className="podcast">


      {/* Apple Podcasts Section - Horizontal */}
      <div className="platform-section">
        <h2 className="platform-heading">Apple Podcasts</h2>
        <div className="podcast__horizontal">
          {appleEpisodes.map((ep) => (
            <div className="podcast__card" key={ep.id}>
              <h3 className="podcast__title">{ep.title}</h3>
              <iframe
                title={ep.title}
                src={ep.link}
                height="175"
                allow="autoplay *; encrypted-media *; fullscreen *"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  border: 'none',
                }}
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* Spotify Section - Vertical */}
      <div className="platform-section">
        <h2 className="platform-heading">Spotify</h2>
        <div className="podcast__vertical">
          {spotifyEpisodes.map((ep) => (
            <div className="podcast__card" key={ep.id}>
              <h3 className="podcast__title">{ep.title}</h3>
              <iframe
                title={ep.title}
                src={ep.link}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                style={{
                  borderRadius: '12px',
                  border: 'none',
                }}
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
