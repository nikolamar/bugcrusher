import React from 'react';
import { createState } from '../hooks/create-state';
import { createElement } from '../hooks/create-element';
import { createClassName } from '../hooks/create-class-name';

export function BugCrusher(props: BugCrushserProps): React.ReactElement {

    const initialState = props?.isAdmin ? 'admin' : 'user';
    const [state, handleClick] = createState(initialState);
    const [className] = createClassName(state);
    const element = createElement(props, state);

    return (
        <div
            onClick={handleClick}
            className={className}
            x-user='Start Recording'
            x-admin='Open Console'
            x-recording='Recording'
            x-recording-hover='Stop'
        >
            {element}
        </div>
    );
}
