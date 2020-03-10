import React from "react";
import { render, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { fetchBreweries } from "../api/fetchBreweries";
import BreweriesList from "./BreweriesList";

jest.mock("../api/fetchBreweries");

it("Renders breweries from API", async () => {
  const mockBreweries = [
    {
      id: 1,
      name: "Brewery 1",
      brewery_type: "micro",
      city: "Pittsburgh",
      state: "Pennsylvania",
      website_url: "https://www.beeradvocate.com/"
    },
    {
      id: 2,
      name: "Brewery 2",
      brewery_type: "planning",
      city: "Philadelphia",
      state: "Pennsylvania",
      website_url: "https://www.beeradvocate.com/"
    },
    {
      id: 3,
      name: "Brewery 3",
      brewery_type: "brewpub",
      city: "Scranton",
      state: "Pennsylvania",
      website_url: "https://www.beeradvocate.com/"
    }
  ];

  fetchBreweries.mockResolvedValue(mockBreweries);
  let getByText;
  await act(async () => {
    ({ getByText } = render(
      <Router>
        <BreweriesList />
      </Router>
    ));
  });

  mockBreweries.forEach(brewery => {
    expect(getByText(brewery.name)).toBeInTheDocument();
  });
});
