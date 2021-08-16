import React from 'react';

export function createState(initial: string) {
    const [state, setState] = React.useState(initial);

    const handleClick = () => {
        state === 'button' && setState('recording');
        state === 'recording' && setState('event');
        state === 'event' && setState('button');
    }

    return [state, handleClick as any];
}
