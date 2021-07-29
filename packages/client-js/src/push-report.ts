import sprintf from "./utils/sprintf";
import isArrayOfStrings from "./utils/is-array-of-strings";

/**
 * function: `pushReport`
 * Adds new object data to history list.
 */
export default function pushReport(
    this: ReportState,
    data: Data,
    options: ReportPushOptions = {
        type: 'general',
    }
): void {

    if (!this.isRecording) {
        return;
    }

    const { type = 'general' } = options;

    if (Array.isArray(data) && typeof data[0] === 'string' && data[0].includes('%s') && isArrayOfStrings(data)) {
        this.history.push({ time: new Date().toLocaleString(), type: 'console', data: sprintf(data as any) });
        return;
    }

    this.history.push({ time: new Date().toLocaleString(), type, data });
}