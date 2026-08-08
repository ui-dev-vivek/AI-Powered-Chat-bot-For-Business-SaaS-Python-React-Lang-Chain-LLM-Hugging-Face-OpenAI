import { createContext, useContext, useState, type ReactNode } from "react";

const CountContext = createContext<any>(null);

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <CountContext.Provider
      value={{
        count,
        increment,
        decrement,
        reset,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
};
