/**
 * function: `getReport`
 * Get Report returns state.report logs with all pushed data to state.report with console logs.
 */
export function getReport(this: ReportState): Record<string, unknown>[] {
    return this.report;
}