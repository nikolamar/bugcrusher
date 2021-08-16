import React from 'react';
import { Table } from '../components/table';

export function createElement(props: BugCrushserProps, state: string | (() => void)) {
    return React.useMemo(() => {

        if (state === 'button') return (
            <p>{props.buttonText || 'Start Recording'}</p>
        );

        if (state === 'recording') return (
            <p>{props.recordingText || 'Recording'}</p>
        );

        if (state === 'event') return (
            <Table/>
        );

        return null;

    }, [props, state]);
}