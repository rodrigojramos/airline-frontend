type Props = {
    message: string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onDialogClose: Function;
}

export function DialogInfo({ message, onDialogClose }: Props) {
    return(
        <div className="airline-dialog-background" onClick={() => onDialogClose()}>
            <div className="airline-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="airline-dialog-box-button" onClick={() => onDialogClose()}>
                    Ok
                </div>
            </div>
        </div>
    )
}