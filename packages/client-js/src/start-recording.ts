import { startRecordingVideo } from "./start-recording-video";

/**
 * function: `startRecording`
 * Simply set state to recording.
 */
export function startRecording(this: ReportState, options: Record<string, any> = {}): void {
    console.clear();

    if (options?.video === false) {
        this.isRecording = true;
        return;
    }

    startRecordingVideo(this);
}