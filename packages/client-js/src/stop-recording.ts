import stopRecordingVideo from "./stop-recording-video";

/**
 * function: `stopRecording`
 * Simply set state recording to `false`.
 */
export default function stopRecording(this: ReportState): void {
    this.isRecording = false;

    stopRecordingVideo(this);
}