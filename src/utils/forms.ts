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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validate(inputs: any, name: string) {

    if(!inputs[name].validation) {
        return inputs;
    }

    const isInvalid = !inputs[name].validation(inputs[name].value);

    return { ...inputs, [name]: { ...inputs[name], invalid: isInvalid.toString()}}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toDirty(inputs: any, name: string) {
    return { ...inputs, [name]: { ...inputs[name], dirty: "true"}}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateAndValidate (inputs: any, name: string, newValue: any) {
    const dataUpdated = update(inputs, name, newValue);
    return validate(dataUpdated, name);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dirtyAndValidate (inputs: any, name: string) {
    const dataDirty = toDirty(inputs, name);
    return validate(dataDirty, name);
}