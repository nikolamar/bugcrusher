import { stopRecordingVideo } from "./stop-recording-video";
// types
import type { ReportState } from "./types";

/**
 * function: `stopRecording`
 * Set state recording to `false`.
 */
export function stopRecording(this: ReportState): void {
  this.isRecording = false;

  stopRecordingVideo(this);
}
