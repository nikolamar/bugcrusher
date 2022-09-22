// types
import type { ReportState } from "./types";

/**
 * function: `isRecording`
 * Checks is recording of console logs started.
 */
export function isRecording(this: ReportState): boolean {
  return this.isRecording;
}
