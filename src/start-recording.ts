import { startRecordingVideo } from "./start-recording-video";
// types
import type { ReportState } from "./types";

/**
 * function: `startRecording`
 * Set state to true.
 */
export function startRecording(this: ReportState): void {
  console.clear();

  this.isRecording = true;

  startRecordingVideo(this);
}
