// types
import type { allEvents } from './all-events';

export function dispatchEvent(event: typeof allEvents[number], data: any): void {
    window.dispatchEvent(new CustomEvent(event, { detail: { data } }));
}