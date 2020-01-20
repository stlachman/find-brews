import React, { useState } from "react";
import MapGL, { Marker } from "react-map-gl";
import { Box, Text } from "@chakra-ui/core";

export default function({ lat, long, name }) {
  const [toggle, setToggle] = useState(false);

  const [viewport, setViewport] = useState({
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  return (
    <MapGL
      {...viewport}
      latitude={Number(lat)}
      longitude={Number(long)}
      width="100vw"
      height="50vh"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker
        latitude={Number(lat)}
        longitude={Number(long)}
        style={{ position: "relative" }}
      >
        {toggle ? (
          <Box
            right="30px"
            top="-60px"
            position="absolute"
            width="20vh"
            p={"1em 2em"}
            bg="white"
          >
            <Text fontFamily={"body"} fontWeight="bold" as="h3">
              {name}
            </Text>
          </Box>
        ) : null}
        <button>
          <span
            onClick={() => setToggle(t => !t)}
            aria-label="Beer Marker"
            role="img"
            style={{ fontSize: "2em" }}
          >
            🍺
          </span>
        </button>
      </Marker>
    </MapGL>
  );
}
