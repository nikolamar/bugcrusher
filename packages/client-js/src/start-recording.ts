import { startRecordingVideo } from "./start-recording-video";
import { dispatchEvent } from './dispatch-event';

/**
 * function: `startRecording`
 * Simply set state to recording.
 */
export function startRecording(this: ReportState, options?: Record<string, any>): void {
    console.clear();

    // fire custom event 'reportchange'
    dispatchEvent('recordchange', true);

    if (!this?.options?.video || options?.video === false) {
        this.isRecording = true;
        return;
    }

    startRecordingVideo(this);
}