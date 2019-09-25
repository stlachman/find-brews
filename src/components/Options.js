import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import { states } from "../data/states";

const Options = ({ setCurrentState }) => {
  return (
    <>
      <label htmlFor="states">List of States</label>
      <Box>
        <select
          name="states"
          id="states-list"
          onChange={e => setCurrentState(e.target.value)}
          onBlur={e => setCurrentState(e.target.value)}
        >
          <option key="234303404340904343909042" value="">
            Select a State
          </option>
          {states.map(state => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
        </select>
      </Box>
    </>
  );
};

export default Options;
