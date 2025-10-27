import { useParams } from "react-router-dom";
import { useState } from "react";
import { SESSIONS } from "../../dummy-sessions";
import styles from './Session.module.scss';

import Button from "../../components/UI/Button/Button";
import BookingSessionDialog from "../../components/Sessions/BookSessionDialog";

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [isModalOpen, setModalState] = useState(false);

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);


  if (!loadedSession) {
    return (
      <main className={styles.sessionPage} id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  function openBookingModal () {
    setModalState(true);
  }

  function closeBookingModal () {
    setModalState(false);
  }

  return (
    <main className={styles.sessionPage} id="session-page">
      {isModalOpen && <BookingSessionDialog session={loadedSession} onClose={closeBookingModal}/>}
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <Button onClick={openBookingModal}>Book this Session</Button>
            </p>
          </div>
        </header>
        <p className={styles.content}>{loadedSession.description}</p>
      </article>
    </main>
  );
}
