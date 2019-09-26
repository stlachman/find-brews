import React from "react";
import { Text, Link } from "@chakra-ui/core";

const BrewerDetails = ({ currentBrewer }) => {
  if (currentBrewer) {
    return (
      <>
        <Text>
          {currentBrewer.name}: {currentBrewer.brewery_type}
        </Text>
        <address>
          <Text>{currentBrewer.street}</Text>
          <Text>
            {currentBrewer.city}, {currentBrewer.state}
          </Text>
          <Text>{currentBrewer.postal_code}</Text>
        </address>
        <Link
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
      <Text>No Brewer Selected</Text>
    </>
  );
};
export default BrewerDetails;
