import React, { useContext } from "react";
import SearchTracks from "./SearchTracks";
import { TrackContext } from "../../TrackProvider";
import { Spinner } from "./Spinner";
import Track from "./Track";

const Tracks = () => {
  const {tracks, heading} = useContext(TrackContext);

  if (tracks === undefined || tracks.length === 0) {
    return <Spinner />;
  } else {
    return (
      <>
        <SearchTracks />
        <h3 className="text-center" >{heading}</h3>
        <div className="row">
          {tracks.map((track) => (
            <Track key={track.track.track_id} track={track.track} />
          ))}
        </div>
      </>
    );
  }
};

export default Tracks;
