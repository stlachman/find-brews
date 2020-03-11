import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { BreweryCard } from "./BreweryCard";

it("renders card", () => {
  const brewery = {
    name: "St Boniface"
  };
  const { getByText } = render(
    <Router>
      {" "}
      <BreweryCard brewery={brewery} />
    </Router>
  );
  expect(getByText(brewery.name)).toBeInTheDocument();
});
