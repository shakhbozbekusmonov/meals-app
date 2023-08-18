import { useState, ChangeEvent } from "react";

type State = {
    [key: string]: string;
};

type SetValue = (evt: ChangeEvent<HTMLSelectElement>) => void;

type UseFormReturnType = [State, SetValue];

export const useForm = (initialState: State): UseFormReturnType => {
    const [value, setValue] = useState<State>(initialState);

    const handleChange: SetValue = (evt) => {
        setValue((prevState) => ({
            ...prevState,
            [evt.target.name]: evt.target.value,
        }));
    };

    return [value, handleChange];
};
