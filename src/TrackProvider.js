import React, { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";

export const TrackContext = createContext();

export const TrackProvider = (props) => {
  const [tracks, setTracks] = useState([]);
  const [heading, setHeading] = useState("Top 10 Tracks");
  const fetchTracks = async () => {
    try {
      const dataTracks = await axios(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ng&f_has_lyrics=1&apikey=6c591c1166dcf2c229feed7e213a2230`
      );
      const tracksData = dataTracks.data.message.body.track_list;
      setTracks(tracksData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTracks();
  }, []);
  return (
    <TrackContext.Provider value={{tracks, setTracks, heading, setHeading}}>
      {props.children}
    </TrackContext.Provider>
  );
};
