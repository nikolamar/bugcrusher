import getReport from "./getReport";
import hookToConsole from "./hookToConsole";
import isHooked from "./isHooked";
import isRecording from "./isRecording";
import pushReport from "./pushReport";
import startRecording from "./startRecording";
import stopRecording from "./stopRecording";
import saveReport from "./saveReport";
import openReport from "./openReport";
import saveVideo from "./saveVideo";

export default function createClient(options: ReportOptions = {}): ReportClient {

    const client: ReportClient = console;

    const state: ReportState = {
        options,
        history: [],
        isHooked: false,
        isRecording: false,
        isVideoReady: false,
        stream: {},
        recorder: {},
        chunks: [],
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

    hookToConsole(client, state);

    return client;
}