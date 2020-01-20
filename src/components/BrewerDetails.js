import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Text, Link } from "@chakra-ui/core";

const BrewerDetails = ({ currentBrewer }) => {
  if (currentBrewer) {
    return (
      <>
        <Text fontFamily={"body"}>
          <Link as={ReactLink} to={`/brewers/${currentBrewer.id}`}>
            {currentBrewer.name}
          </Link>
          : {currentBrewer.brewery_type}
        </Text>
        <address>
          <Text fontFamily={"body"}>{currentBrewer.street}</Text>
          <Text fontFamily={"body"}>
            {currentBrewer.city}, {currentBrewer.state}
          </Text>
          <Text fontFamily={"body"}>{currentBrewer.postal_code}</Text>
        </address>
        <Link
          fontFamily={"body"}
          textDecoration="underline"
          href={`https://www.google.com/maps/search/?api=1&query=${currentBrewer.name} ${currentBrewer.street} ${currentBrewer.city}${currentBrewer.state}`}
          isExternal
        >
          Directions
        </Link>
      </>
    );
  }
  return (
    <>
      <Text fontFamily={"body"}>No Brewer Selected</Text>
    </>
  );
};
export default BrewerDetails;
