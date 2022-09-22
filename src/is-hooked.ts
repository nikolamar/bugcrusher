// types
import type { ReportState } from "./types";

/**
 * function: `isHooked`
 * Checks is console binded to new function hook.
 */
export function isHooked(this: ReportState): boolean {
  return this.isHooked;
}
