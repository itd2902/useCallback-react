import React, { useState, useCallback } from "react";
import Counter from "./Counter";

const App = () => {
  const [values, setValues] = useState(0);
  const increment = useCallback(() => setValues((values) => values + 1), [
    setValues,
  ]);
  return (
    <div>
      <Counter increment={increment} />
      {values}
    </div>
  );
};

export default App;
