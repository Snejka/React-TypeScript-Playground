import { useEffect, useRef } from "react";
import Button from "../UI/Button/Button";
import Modal, { ModalHandle } from "../UI/Modal/Modal";
import { useSessionsContext } from "../../context/SessionContext";
import UpcomingSessionItem from "./UpcomingSessionItem/UpcomingSessionItem";

type UpcomingSessionDialog = {
    onClose: () => void;
}

export default function UpcomingSessionDialog ({ onClose }: UpcomingSessionDialog) {
    const modal = useRef<ModalHandle>(null);
    const { upcomingSessions, cancelSession } = useSessionsContext();
    const noSessions = upcomingSessions.length === 0;

    // console.log('--->', upcomingSessions);

    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, []);

    function handleCancelSession (sessionId : string) {
        cancelSession(sessionId);
    }
// CreateUpcomingSessionsList Component
// Create InfoBox Component
    return (
        <Modal onClose={onClose} ref={modal}>
            <h2>Upcoming Sessions</h2>
            { noSessions ? (<p>No upcoming sessions.</p>) : (
                <ul>
                    {upcomingSessions.map(session => <li key={session.id}>
                            <UpcomingSessionItem onCancel={() => handleCancelSession(session.id)} {...session}/>
                        </li>)
                    }
                </ul>
            )}
           <p className="actions">
                <Button onClick={onClose}>Close</Button>
           </p>
        </Modal>        
    )
}