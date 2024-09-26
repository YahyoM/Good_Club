import { createContext, useState } from "react";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [typeOfClass, setTypeOfClass] = useState(1);
  const [user, setUser] = useState(null);
  const [darkmode, setDarkmode] = useState("light");
  document.getElementById('body').style.backgroundColor = ((darkmode === "dark") ? "#12141B" : "")

  return (
    <GlobalContext.Provider
      value={{
        typeOfClass,
        setTypeOfClass,
        user,
        setUser,
        darkmode,
        setDarkmode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
