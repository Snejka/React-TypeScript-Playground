import { FormEvent, useEffect, useRef } from "react";

import Modal , { ModalHandle } from "../UI/Modal"
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useSessionsContext } from "../../context/SessionContext";
import { Session } from "../../context/sessions/types/sessionTypes";


type BookSessionType = {
    session: Session;
    onClose: () => void;
}

export default function BookingSessionDialog ({onClose, session}: BookSessionType) {
    const { bookSession } = useSessionsContext();

    const modal = useRef<ModalHandle>(null);

    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, []);

    function handleSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data);
        bookSession(session);
        onClose();
    }

    return (
        <Modal onClose={onClose} ref={modal}>
            <h2>Book Session</h2>
            <form onSubmit={handleSubmit}>
                <Input label="Your name" id="name" name="name" type="text" />
                <Input label="Your email" id="email" name="email" type="email" />
                <p className="actions">
                    <Button type="button" textOnly onClick={onClose}>
                        Cancel
                    </Button>
                    <Button>Book Session</Button>
                </p>
            </form>
        </Modal>
    )
}