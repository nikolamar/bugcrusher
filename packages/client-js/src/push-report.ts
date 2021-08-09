import { sprintf } from "./utils/sprintf";
import { isArrayOfStrings } from "./utils/is-array-of-strings";
import { dispatchEvent } from './dispatch-event';

/**
 * function: `pushReport`
 * Adds new object data to state.report list.
 */
export function pushReport(
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
        this.report.push({ time: new Date().toLocaleString(), type: 'console', data: sprintf(data as any) });
        return;
    }

    this.report.push({ time: new Date().toLocaleString(), type, data });

    // fire custom event 'reportchange'
    dispatchEvent('reportchange', this.report);
}