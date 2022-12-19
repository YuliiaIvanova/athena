import React from 'react';
import {
    InputWrap,
    Label,
    NumberInput,
    Controls
} from './Input.styles';

const Input = ({ value, setValue }) => {
    const onInputChangeHandler = (e) => {
        const newInputValue = e.target.value;
        setValue(newInputValue);
    };

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    }

    const decrement = () => {
        setValue(prevValue => prevValue - 1);
    }

    return (
        <div>
            <Label htmlFor='age'>Your ideal retire age</Label>
            <InputWrap>
                <NumberInput
                    id='age'
                    type='number'
                    value={value}
                    onChange={onInputChangeHandler}
                />
                <Controls>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                </Controls>
            </InputWrap>

        </div>
    )
};

export default Input;