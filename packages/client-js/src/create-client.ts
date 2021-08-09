import { getReport } from "./get-report";
import { hookToConsole } from "./hook-to-console";
import { isHooked } from "./is-hooked";
import { isRecording } from "./is-recording";
import { pushReport } from "./push-report";
import { startRecording } from "./start-recording";
import { stopRecording } from "./stop-recording";
import { saveReport } from "./save-report";
import { openReport } from "./open-report";
import { saveVideo } from "./save-video";
import { addEvents } from './add-events';
import { on } from './on';

export function createClient(options: ReportOptions = {}): ReportClient {

    const client = console as ReportClient & Console;

    const state: ReportState = {
        options,
        report: [],
        isHooked: false,
        isRecording: false,
        isRecordingVideo: false,
        isVideoReady: false,
        stream: {},
        recorder: {},
        chunks: [],
        events: {},
    };

    client.pushReport = pushReport.bind(state);

    client.startRecording = startRecording.bind(state);

    client.stopRecording = stopRecording.bind(state);

    client.getReport = getReport.bind(state);

    client.saveReport = saveReport.bind(state);

    client.openReport = openReport.bind(state);

    client.saveVideo = saveVideo.bind(state);

    client.isRecording = isRecording.bind(state);

    client.isHooked = isHooked.bind(state);

    client.on = on.bind(state);

    hookToConsole(client, state);

    addEvents(state);

    return client;
}