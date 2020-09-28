import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Match from "./components/Match";
import { getMatchData } from "./api/Api";
import { Grid } from "@material-ui/core";
function App() {
  const [matches, setMatch] = useState([]);
  useEffect(() => {
    getMatchData().then((result) => {
      setMatch(result.matches);
      //console.log(result);
    });
  }, []);
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Navbar />

      <Grid container>
        <Grid item sm="3"></Grid>
        <Grid item sm="6">
          {matches.map((match) => {
            return match.type == "Twenty20" ? (
              <Match key={match.unique_id} match={match} />
            ) : (
              ""
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
