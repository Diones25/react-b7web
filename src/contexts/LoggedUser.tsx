import { ReactNode, createContext, useState } from "react";

type LoggedUserContextType = {
  name: string;
  setName: (n: string) => void;
}

export const LoggedUserContext = createContext<LoggedUserContextType | null>(null);

export const LoggedUserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState('Diones');

  return (
    <LoggedUserContext.Provider value={{ name, setName }}>{ children }</LoggedUserContext.Provider>
  )
}