import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './MainHeader.module.scss'

import Button from "../UI/Button/Button";
import UpcomingSessionDialog from "../Sessions/UpcomingSessionDialog";

export default function MainHeader() {
  const [isModalOpen, setModalState] = useState(false);

  function handleUpcomingSessionsOpen () {
    setModalState(true);
  }

  function handleUpcomingSessionsClose () {
    setModalState(false);
  }

  return (
    <>
      {isModalOpen && <UpcomingSessionDialog onClose={handleUpcomingSessionsClose}/>}
      <header className={styles.header}>
        <h1 className={styles.title}>ReactMentoring</h1>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => 
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActive }) => 
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                end
              >
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={handleUpcomingSessionsOpen}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
