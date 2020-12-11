import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import { TrackProvider } from "./TrackProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./components/Tracks/Index";
import TrackLyrics from "./components/Lyrics/TrackLyrics";

const App = () => {
  return (
    <>
      <Router>
        <TrackProvider>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/track/:id" component={TrackLyrics} />
            </Switch>
          </div>
        </TrackProvider>
      </Router>
    </>
  );
};

export default App;
