import React from 'react';

export function createClassName(state: string) {
    return React.useMemo(() => {
        const className = `bc-container ${state}`;

        return [className]
    }, [state]);
}