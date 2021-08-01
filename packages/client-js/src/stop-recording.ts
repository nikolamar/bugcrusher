import { stopRecordingVideo } from "./stop-recording-video";
// types
import type { ReportState } from "../types/main";

/**
 * function: `stopRecording`
 * Simply set state recording to `false`.
 */
export function stopRecording(this: ReportState): void {
    this.isRecording = false;

    stopRecordingVideo(this);
}