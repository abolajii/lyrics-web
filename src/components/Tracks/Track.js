import React from "react";
import  { NavLink } from 'react-router-dom'

const Track = ({ track }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>Track</strong> : {track.track_name}
            <br />
            <strong>Album</strong> : {track.album_name}
          </p>
          <NavLink to={`/track/${track.track_id}`}>
            <input
              type="button"
              className="btn btn-info btn-block"
              value="VIEW LYRICS"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Track;
