import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };

  return {
    count,
    increment,
  };
}
export default useCount;
