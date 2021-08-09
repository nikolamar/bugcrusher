import React from "react";
import { setStorage } from '../utils/storage';
import { themes } from '../config/themes';
import { allThemes } from '../config/static';
import { Toast } from "../components/toast";
import { Toaster } from "../components/toaster";
import { HiddenButton } from "../components/hidden-button";

export function useWithClient(client: any): any {

    const [report, setReport] = React.useState([]);

    React.useMemo(() => {
        setStorage(allThemes, themes);
    }, [allThemes, themes]);

    React.useMemo(() => {
        setTimeout(() => client.startRecording({ video: false }), 500);
        client.on('reportchange', (reportchange: any) => {
            setReport(reportchange);
        });
    }, [client]);

    const data = (
        <Toaster>
            {report.map((item: any) => (
                <Toast key={item.time}>{item.time}</Toast>
            ))}
        </Toaster>
    );

    const button = (
        <HiddenButton
            width='200px'
            bottom='50px'
            onClick={client.isRecording() ? client.stopRecording : client.startRecording}
        >
            {client.isRecording() ? 'Stop Recording' : 'Start Recording'}
        </HiddenButton>
    );

    return [button, data];
}