import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Brewer = () => {
  const [brewery, setBrewery] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let location = useLocation();
  useEffect(() => {
    const number = /\d+/g;

    let brewerID = location.pathname.match(number);
    fetch(`https://api.openbrewerydb.org/breweries/${brewerID}`, {
      method: "GET"
    })
      .then(r => r.json())
      .then(r => {
        console.log(r);
        setBrewery(r);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>{brewery.name}</h2>
    </div>
  );
};

export default Brewer;
