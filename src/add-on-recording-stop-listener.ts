// types
import type { ReportState } from "./types";

/**
 * function: `onRecordingStop`
 * add an event listener to the recorder.
 */
export function addOnRecordingStopListener(
  this: ReportState,
  listener: (e: any) => void
): Symbol {
  const symbol = Symbol()
  this.recorderListeners.stop.set(symbol, listener)
  return symbol
}

