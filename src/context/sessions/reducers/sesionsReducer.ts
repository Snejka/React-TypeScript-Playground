import type  { SessionState } from "../types/sessionTypes";
import { SessionsAction } from "../actions/sessionActions";

export function sessionsReducer(state: SessionState, action: SessionsAction) {
    console.log("🌀 Reducer received:", action.type, action);
    
    if (action.type === 'BOOK_SESSION') {
      if (
        state.upcomingSessions.some((session) => session.id === action.session.id)
      ) {
        return state;
      }
      return {
        upcomingSessions: state.upcomingSessions.concat(action.session),
      };
    }
  
    if (action.type === 'CANCEL_SESSION') {
      return {
        upcomingSessions: state.upcomingSessions.filter(
          (session) => session.id !== action.sessionId
        ),
      };
    }
  
    return state;
  }