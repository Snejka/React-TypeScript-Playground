import { Session } from "../types/sessionTypes";

// Each function returns an action object
export const bookSessionAction = (session: Session) => ({
    type: "BOOK_SESSION" as const,
    session,
  });
  
  export const cancelSessionAction = (sessionId: string) => ({
    type: "CANCEL_SESSION" as const,
    sessionId,
  });
  
  // Optional: export a union type for all actions (handy for the reducer)
  export type SessionsAction =
    | ReturnType<typeof bookSessionAction>
    | ReturnType<typeof cancelSessionAction>;