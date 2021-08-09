import { allEvents } from './all-events';

export function addEvents(state: ReportState): void {
    allEvents.forEach(event => {
        window.addEventListener(event, ({ detail }: any) => {
            if (typeof state.events[event] === 'function') {
                state.events[event](detail.data);
            }
        });
    });
}