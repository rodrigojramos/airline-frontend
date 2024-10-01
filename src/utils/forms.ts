// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function update(inputs: any, name: string, newValue: any) {
    return { ...inputs, [name]: { ...inputs[name], value: newValue}};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toValues(inputs: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = {};
    // eslint-disable-next-line no-var
    for (var name in inputs) {
        data[name] = inputs[name].value;
    }

    return data;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateAll(inputs: any, newValues: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newInputs: any = {};
    // eslint-disable-next-line no-var
    for (var name in inputs) {
        newInputs[name] = { ...inputs[name], value: newValues[name]};
    }

    return newInputs;
}