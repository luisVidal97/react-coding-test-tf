import React, { useState } from 'react';
import Switch from "react-switch";
import { FocusableTextInputComponent } from '../components/FocusableTextInputComponent';
import { NavBarComponent } from '../components/NavBarComponent';
import ReactMarkdown from 'react-markdown';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

const useFocusableComponent = `
    <FocusableTextInputComponent  focused= { true } />
`;


export const FocusableComponentsPage: React.FC = () => {

    const [activateSimulation, setActivateSimulation] = useState<boolean>(false);

    const handleCheked = (checked: boolean) => {
        setActivateSimulation(checked);
    }

    return (
        <>
            <NavBarComponent />

            <div className="focusableComponentsPage__container">
                <h1 className="title focusableComponentsPage__title">Focusable input</h1>
                <p>
                    In this section, you can find a custom component. It is a text input that allow 
                    you to pass it by focused prop. This determinate if the input text is focusable depending
                    on its respective prop. Next, you watch the code:
                </p>
                
                <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
                }} children={useFocusableComponent} />

                <p>
                    This focused prop is optional and only accepts boolean values. Below, you can set the
                    value of the prop and check its functionality changing Switch component. Activate the 
                    Switch to send focused prop in 'true' and disable it to set the prop in 'false'.
                </p>             

                <p>Switch:</p>
                
                <Switch 
                    onChange={ handleCheked } 
                    checked={ activateSimulation } 
                    onColor="#0A0A36" 
                    offColor="#cccccc"
                />

                <ReactMarkdown  renderers={{
                code: SyntaxHighlighterCode
                }} children={
                `
                <FocusableTextInputComponent  focused= { ${JSON.stringify(activateSimulation)} } />                `} 
                />
                <br />
                <FocusableTextInputComponent focused={activateSimulation} />

            </div>
                    
        </>
    );
}

interface IProps {
    value: string;
}

const SyntaxHighlighterCode = ({value}: IProps) => {
    return (
        <SyntaxHighlighter style={dracula} language="javascript" children={value} />
    );
}
