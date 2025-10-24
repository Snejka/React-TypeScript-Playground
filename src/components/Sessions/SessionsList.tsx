import SessionItem from "./SessionItem";

export type SessionType = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

type SessionListProps = {
  sessions: SessionType[];
};

export default function SessionsList({ sessions }: SessionListProps) {
  return (
    <ul id="sessions-list">
      {sessions.map((item) => (
        <li key={item.id}><SessionItem {...item}/></li>
      ))}
    </ul>
  );
}
