import { SessionType } from "./SessionsList";
import Button from "../UI/Button";

export default function SessionItem({ title, summary, image, id }: SessionType) {
  return (
    <article className='session-item'>
      <img src={image} alt={title} />
      <div className="session-data">
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <p className="actions">
          <Button to={id}>Learn More</Button>
        </p>
      </div>
    </article>
  );
}
