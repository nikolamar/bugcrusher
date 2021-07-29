import startRecordingVideo from "./start-recording-video";

/**
 * function: `startRecording`
 * Simply set state to recording.
 */
export default function startRecording(this: ReportState): void {
    console.clear();

    this.isRecording = true;

    startRecordingVideo(this);
}