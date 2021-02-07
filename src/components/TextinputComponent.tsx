import React, {useEffect} from 'react';

interface PropsTextInputComponent {
    inputRef?: React.RefObject<HTMLInputElement>,
}

export const TextInputComponent: React.FC<PropsTextInputComponent> = ({inputRef}) => {

    
    useEffect(() => {
        inputRef?.current?.focus();
    }, [inputRef])

    return (
        <input type="text" ref={inputRef} className="textInputComponent"/>
    );
}
