import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "../Tracks/Spinner";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";

const TrackLyrics = (props) => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  const fetchLyrics = async () => {
    try {
      const trackLyrics = await axios(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=6c591c1166dcf2c229feed7e213a2230`
      );
      setLyrics(trackLyrics.data.message.body.lyrics);

      const track = await axios(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=6c591c1166dcf2c229feed7e213a2230`
      );
      setTrack(track.data.message.body.track);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
     fetchLyrics();
  }, []);

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />;
  } else {
    return (
      <>
        <NavLink to="/" className="btn btn-info btn-sm mb-4">
          Go Back
        </NavLink>
        <div className="card">
          <h5 className="card-header">
            {track.track_name} by{" "}
            <span className="text-secondary">{track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong> : {track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong> :{" "}
            {track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li className="list-group-item">
            <strong>Release Date</strong> : <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
          </li>
        </ul>
      </>
    );
  }
};

export default TrackLyrics;
