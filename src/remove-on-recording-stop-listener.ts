// types
import type { ReportState } from "./types";

/**
 * function: `onRecordingStop`
 * add an event listener to the recorder.
 */
 export function removeOnRecordingStopListener(
  this: ReportState,
  symbol: Symbol
): void {
  this.recorderListeners.stop.remove(symbol)
}
