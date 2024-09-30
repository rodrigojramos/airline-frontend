// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FormInput(props: any) {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { validation, ...inputProps } = props;

    return (
        <input { ...inputProps } />
    )
}