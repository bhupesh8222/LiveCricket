import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Match from "./components/Match";
import { getMatchData } from "./api/Api";
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
      {matches.map((match) => {
        return <Match match={match} />;
      })}
    </div>
  );
}

export default App;
