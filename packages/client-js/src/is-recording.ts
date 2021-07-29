/**
 * function: `isRecording`
 * Simply checks is recording of console logs started.
 */
export default function isRecording(this: ReportState): boolean {
    return this.isRecording;
}