/* eslint-disable @typescript-eslint/no-explicit-any */
export const selectStyles = {
    control: (provided: any) => ({
        ...provided,
        minHeight: "40px",
        border: "none",
        borderRadius: 0,
        boxShadow: "none",
        "&:hover": {
            border: "none",
        },
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: "none",
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#87CEEB' : state.isFocused ? '#e9ecef' : 'white',
        color: state.isSelected ? 'white' : 'black',
      }),
};