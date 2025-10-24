import { type ReactNode, useReducer } from "react";

import { SessionsContext } from "./SessionContext";
import { sessionsReducer } from "./sessions/reducers/sesionsReducer";
import { Session } from "./sessions/types/sessionTypes";
import { bookSessionAction, cancelSessionAction } from "./sessions/actions/sessionActions"; 

export default function SessionsContextProvider({ children }: {children: ReactNode}) {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, {
    upcomingSessions: [],
  });

  console.log("💡 [SessionsContext] State:", sessionsState);

  function bookSession(session: Session) {
    dispatch(bookSessionAction(session));
  }

  function cancelSession(sessionId: string) {
    dispatch(cancelSessionAction(sessionId));
  }

  const ctxValue = {
    upcomingSessions: sessionsState.upcomingSessions,
    bookSession,
    cancelSession,
  };

  return (
    <SessionsContext.Provider value={ctxValue}>
      {children}
    </SessionsContext.Provider>
  );
}
