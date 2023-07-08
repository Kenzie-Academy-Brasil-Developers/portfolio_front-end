import { ReactNode, useRef } from "react";
import { createContext } from "react";

interface IMainContext {
  NavbarDrawerRef: React.RefObject<HTMLInputElement>;
  toggleDrawer: () => void;
}

interface IMainContextProps {
  children: ReactNode;
}

export const MainContext = createContext({} as IMainContext);

export const ContextProvider = ({ children }: IMainContextProps) => {
  const NavbarDrawerRef = useRef<HTMLInputElement>(null);

  const toggleDrawer = () => {
    if (NavbarDrawerRef.current !== null)
      NavbarDrawerRef.current.checked = !NavbarDrawerRef.current.checked;
  };
  return (
    <>
      <MainContext.Provider value={{ NavbarDrawerRef, toggleDrawer }}>
        {children}
      </MainContext.Provider>
    </>
  );
};
