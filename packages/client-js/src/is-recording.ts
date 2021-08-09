/**
 * function: `isRecording`
 * Simply checks is recording of console logs started.
 */
export function isRecording(this: ReportState): boolean {
    return this.isRecording;
}