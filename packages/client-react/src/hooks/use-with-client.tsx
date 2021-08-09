import React from "react";
import { setStorage } from '../utils/storage';
import { themes } from '../config/themes';
import { allThemes } from '../config/static';
import type { createClient } from '@bug-crusher/client-js';

export function useWithClient(client: ReturnType<typeof createClient>): any {

    const [report, setReport] = React.useState([]);
    const [isRecording, setIsRecording] = React.useState(false);

    React.useMemo(() => {
        setStorage(allThemes, themes);
    }, [allThemes, themes]);

    React.useMemo(() => {
        client.on('reportchange', (data) => setReport(data));
        client.on('recordchange', (data) => setIsRecording(data));
    }, [client]);

    return [report, isRecording];
}