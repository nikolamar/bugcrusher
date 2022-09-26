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
import { addOnRecordingStopListener } from "./add-on-recording-stop-listener";
import { removeOnRecordingStopListener } from "./remove-on-recording-stop-listener";
import { destroy } from "./destroy";

// types
import type { ReportClient, ReportOptions, ReportState } from "./types";

export function createClient(options: ReportOptions = {}): ReportClient {
  const client = console as ReportClient & Console;

  const state: ReportState = {
    options,
    history: [],
    isHooked: false,
    isRecording: false,
    isVideoReady: false,
    stream: {},
    recorder: {},
    chunks: [],
    recorderListeners: {
      stop: new Map()
    },
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

  client.destroy = destroy.bind(state);

  client.addOnRecordingStopListener = addOnRecordingStopListener.bind(state);

  client.removeOnRecordingStopListener = removeOnRecordingStopListener.bind(state);

  hookToConsole(client, state);

  return client;
}
