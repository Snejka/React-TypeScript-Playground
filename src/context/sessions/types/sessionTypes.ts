export type Session = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
}

export type SessionState = {
    upcomingSessions: Session[];
};


export type SessionContextValue = SessionState & {
    bookSession: (session: Session) => void;
    cancelSession: (sessionId: string) => void;
};