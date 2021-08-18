import React from 'react';
import { Table } from '../components/table';

export function createElement(props: BugCrushserProps, state: string | (() => void)) {
    return React.useMemo(() => {

        if (state === 'report') return (
            <Table/>
        );

        return null;

    }, [props, state]);
}