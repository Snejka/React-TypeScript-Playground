import type { Session } from '../../context/sessions/types/sessionTypes.tsx';
import Button from '../UI/Button/Button.tsx';

type UpcomingSessionProps = Session & {
    onCancel: () => void;
}

export default function UpcomingSessionItem (props : UpcomingSessionProps) {
    console.log('props', props);
    
    return (
        <article className="upcoming-session">
        <div>
          <h3>{props.title}</h3>
          <p>{props.summary}</p>
          <time dateTime={new Date(props.date).toISOString()}>
            {new Date(props.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </time>
        </div>
        <p className="actions">
          <Button textOnly onClick={props.onCancel}>
            Cancel
          </Button>
        </p>
      </article>
    )
}