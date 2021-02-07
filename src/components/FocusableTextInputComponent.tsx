import React, { useEffect, useRef, useState } from 'react';
import { TextInputComponent } from './TextinputComponent';

interface PropsFocusableTextInput {
    focused?: boolean,
}

export const FocusableTextInputComponent: React.FC<PropsFocusableTextInput> = ({focused}) => {

    const inputRef = useRef<HTMLInputElement>(null);
    
    return (
        <>
        {
            focused ?
                <TextInputComponent  inputRef={inputRef}/>
            :
                <TextInputComponent  />
        }
        </>
    );
}
