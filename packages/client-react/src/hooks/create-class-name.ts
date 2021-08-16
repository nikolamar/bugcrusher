import React from 'react';

export function createClassName(state: string) {
    return React.useMemo(() => {
        const classNameName = `bc-container ${state}`;

        return [classNameName]
    }, [state]);
}