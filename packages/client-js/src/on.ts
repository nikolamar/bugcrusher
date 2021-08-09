import { allEvents } from './all-events';

export function on(this: ReportState, event: typeof allEvents[number], callback: (val: any) => void): void {
    if (
        typeof event !== 'string'
        || typeof callback !== 'function'
        || !allEvents.includes(event)
    ) {
        return;
    }

    // Add event callback function
    this.events[event] = callback;
}