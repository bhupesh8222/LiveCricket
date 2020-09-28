import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Match from "./components/Match";
import { getMatchData } from "./api/Api";
import { CircularProgress } from "@material-ui/core";
function App() {
  const [matches, setMatch] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMatchData().then((result) => {
      setMatch(result.matches);
      setLoading(false);
    });
  }, []);
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Navbar />
      {loading ? (
        <>
          <h1>Loading..</h1>
          <CircularProgress />
        </>
      ) : (
        <>
          <h1>Recent T20 Matches</h1>
          <div id="cards">
            {matches.map((match) => {
              return match.type == "Twenty20" ? (
                <Match key={match.unique_id} match={match} />
              ) : (
                ""
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
