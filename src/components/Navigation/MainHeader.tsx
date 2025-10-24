import { useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "../UI/Button";
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
      <header id="main-header">
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActive }) => (isActive ? "active" : "")}
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
