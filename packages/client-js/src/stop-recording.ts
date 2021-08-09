import { stopRecordingVideo } from "./stop-recording-video";
import { dispatchEvent } from './dispatch-event';

/**
 * function: `stopRecording`
 * Simply set state recording to `false`.
 */
export function stopRecording(this: ReportState): void {
    this.isRecording = false;

    // fire custom event 'reportchange'
    dispatchEvent('recordchange', false);

    if (!this.isRecordingVideo) {
        return;
    }

    stopRecordingVideo(this);
}