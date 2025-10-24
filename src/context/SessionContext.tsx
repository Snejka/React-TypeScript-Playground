import { createContext, useContext } from "react";
import { SessionContextValue } from "./sessions/types/sessionTypes";

//Creates the Context
export const SessionsContext = createContext<SessionContextValue | null>(null);

//Custom Hook for using the context with extra safety
export function useSessionsContext() {
  const context = useContext(SessionsContext);
  if (!context) {
    throw new Error(
      'useSessionsContext must be used within a SessionsContextProvider'
    );
  }
  return context;
}