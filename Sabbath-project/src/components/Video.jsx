import React from "react";
import "./Video.css";
import gabi from "../assets/gabiabout.jpg";

const videos = [
  {
    thumbnail: gabi,
    badge: "New",
    badgeColor: "green",
    title: "The Black Adhan",
    instructor: "Episode 1",
    duration: " 1:02:56"
  },
  {
    thumbnail: gabi,
    badge: "Featured",
    badgeColor: "red",
    title: "Order my Steps",
    instructor: "Episode 2",
    duration: "2:10",
    button: "watch"
  },
  {
    thumbnail: gabi,
    badge: "Top Pick",
    badgeColor: "blue",
    title: "Sonic Conversations",
    instructor: "Episode 3",
    duration: "1:32"
  }
];

const Video = () => {
  return (
    <section className="video-wrapper">
      <h2 className="video-heading">Latest Videos</h2>
      <p className="video-subheading">Catch the newest uploads from our creators</p>
      <div className="video-row">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <div className="video-thumb">
              <img src={video.thumbnail} alt={video.title} />
             
              <button className="thumb-watch-btn">Watch</button>
            </div>
            <div className="video-content">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-instructor">{video.instructor}</p>
              <p className="video-duration">{video.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://www.youtube.com/@gabimotuba/videos"
        target="_blank"
        rel="noopener noreferrer"
        className="load-more-btn"
      >
        Load More on YouTube
      </a>
    </section>
  );
};

export default Video;