type Props = {
    id: number;
    message: string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onDialogAnswer: Function;
}

export function DialogConfirmation({ id, message, onDialogAnswer }: Props) {
    return(
        <div className="airline-dialog-background" onClick={() => onDialogAnswer(false, id)}>
            <div className="airline-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="airline-dialog-confirmation-btn">
                    <div className="airline-dialog-confirmation-btn-no" onClick={() => onDialogAnswer(false, id)}>
                        Não
                    </div>
                    <div className="airline-dialog-confirmation-btn-yes" onClick={() => onDialogAnswer(true, id)}>
                        Sim
                    </div>
                </div>
            </div>
        </div>
    )
}