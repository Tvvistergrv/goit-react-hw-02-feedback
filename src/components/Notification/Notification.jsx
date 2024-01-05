import s from '../Notification/Notification.module.css';

export const Notification = ({message}) => (
    <p className={s.notification__text}>
        {message}
    </p>
)
