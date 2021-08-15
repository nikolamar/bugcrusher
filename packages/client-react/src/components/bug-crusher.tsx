import React from 'react';

export function BugCrusher(props: BugCrushserProps): React.ReactNode {

    const [state, handleClick] = createState('button');
    const [element] = createElement(props, state);
    const [className] = createClass(state);

    return (
        <div
            onClick={handleClick}
            className={className}
        >
            {element}
        </div>
    );
}

function createClass(state: string) {
    return React.useMemo(() => {
        const className = `container ${state}`;

        return [className]
    }, [state]);
}

function createState(initial: string) {
    const [state, setState] = React.useState(initial);

    const handleClick = () => {
        state === 'button' && setState('recording');
        state === 'recording' && setState('event');
        state === 'event' && setState('button');
    }

    return [state, handleClick as any];
}

function createElement(props: BugCrushserProps, state: string | (() => void)) {
    return React.useMemo(() => {
        let element;

        if (state === 'button') element = props.buttonLabel;
        else if (state === 'recording') element = props.recordingLabel;
        else if (state === 'event') element = 'event';

        return [element];
    }, [state]);
}