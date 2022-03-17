import React, { useState, createContext, useContext } from "react";

const WinStateContext = createContext({
  winState: null,
  voucher: null,
  setWinState: Function,
});

export const WinStateProvider = ({ children }) => {
  const [winState, setThisWinState] = useState(null);

  const setWin = (winObj) => {
    setThisWinState(winObj);
  };

  return (
    <WinStateContext.Provider value={{ winState, setWin }}>
      {children}
    </WinStateContext.Provider>
  );
};

export const useWinState = () => {
  const context = useContext(WinStateContext);
  // force hook to be used within OwnerProvider
  if (context === undefined) {
    throw new Error("owner and setOwner must be used within a OwnerProvider");
  }
  return context;
};
