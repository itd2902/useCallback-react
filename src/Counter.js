import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Rerender } from "./Rerender";

Counter.propTypes = {};

function Counter({ increment }) {
  Rerender();
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default React.memo(Counter);
