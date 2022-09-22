// types
import type { ReportState } from "./types";
/**
 * function: `getReport`
 * Get Report returns history logs with all pushed data to history with console logs.
 */
export function getReport(this: ReportState): Record<string, unknown>[] {
  return this.history;
}
