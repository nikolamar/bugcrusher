import { startRecordingVideo } from "./start-recording-video";
// types
import type { ReportState } from "../types/main";

/**
 * function: `startRecording`
 * Simply set state to recording.
 */
export function startRecording(this: ReportState): void {
    console.clear();

    this.isRecording = true;

    startRecordingVideo(this);
}