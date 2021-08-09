/**
 * function: `isHooked`
 * Simply checks is console binded to new function hook.
 */
export function isHooked(this: ReportState): boolean {
    return this.isHooked;
}