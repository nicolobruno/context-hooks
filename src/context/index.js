import { createContext, useContext } from "react";

export const globalState = {
  items: [
    {
      id: 1,
      label: "Zapatillas",
    },
    {
      id: 2,
      label: "Camperas",
    },
    {
      id: 3,
      label: "Pantalones",
    },
    {
      id: 4,
      label: "Busos",
    },
    {
      id: 5,
      label: "Musculosas",
    },
  ],
};

export const GlobalContext = createContext();

export const useGlobalValue = () => useContext(GlobalContext);
