import React from 'react';
import { createState } from '../hooks/create-state';
import { createElement } from '../hooks/create-element';
import { createClassName } from '../hooks/create-class-name';

export function BugCrusher(props: BugCrushserProps): React.ReactElement {

    const [state, handleClick] = createState('button');
    const [className] = createClassName(state);
    const element = createElement(props, state);

    return (
        <div
            onClick={handleClick}
            className={className}
            x-button-text={props.buttonText || 'Start Recording'}
            x-recording-text={props.recordingText || 'Recording'}
            x-recording-hover-text='Stop'
        >
            {element}
        </div>
    );
}
