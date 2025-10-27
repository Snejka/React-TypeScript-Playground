import type { Session } from '../../../context/sessions/types/sessionTypes.ts';
import Button from '../../UI/Button/Button.tsx';
import styles from './UpcomingSessionItem.module.scss';

type UpcomingSessionProps = Session & {
    onCancel: () => void;
}

export default function UpcomingSessionItem ({title, summary, date, onCancel, ...rest} : UpcomingSessionProps) {
    // console.log('props', rest);
    
    return (
        <article className={styles.upcomingSession}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p>{summary}</p>
          <time dateTime={new Date(date).toISOString()}>
            {new Date(date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </time>
        </div>
        <p className="actions">
          <Button textOnly onClick={onCancel}>
            Cancel
          </Button>
        </p>
      </article>
    )
}