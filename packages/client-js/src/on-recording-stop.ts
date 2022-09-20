// types
import type { ReportState } from "../types/main";

/**
 * function: `onRecordingStop`
 * add an event listener to the recorder.
 */
export function onRecordingStop(this: ReportState, listener: Function): void {
    this.recorder.addEventListener("stop", listener)
    this.recorderListeners.push(listener)
}