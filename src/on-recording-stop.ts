// types
import type { ReportState } from "./types";

/**
 * function: `onRecordingStop`
 * add an event listener to the recorder.
 */
export function onRecordingStop(
  this: ReportState,
  listener: (e: any) => void
): void {
  this.recorder.addEventListener("stop", listener);
  this.recorderListeners.push(listener);
}
