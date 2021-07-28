import stopRecordingVideo from "./stopRecordingVideo";

/**
 * function: `stopRecording`
 * Simply set state recording to `false`.
 */
export default function stopRecording(this: ReportState): void {
    this.isRecording = false;

    stopRecordingVideo(this);
}