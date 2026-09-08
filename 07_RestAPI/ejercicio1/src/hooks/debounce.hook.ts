import React from "react"

export const useDebounce = (value, time) => {

    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, time);

        return (() => { clearTimeout(timerId) });
    }, [value, time]);

    return debouncedValue;
}