import React, { useState, useEffect } from "react";
import axios from "axios";

const BreweriesList = () => {
  const [breweries, setBreweries] = useState([]);

  const fetchData = () => {
    axios
      .get("https://api.openbrewerydb.org/breweries?page=1&per_page=35")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Breweries</h2>
    </div>
  );
};

export default BreweriesList;
