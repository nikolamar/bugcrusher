/**
 * function: `hookToConsole`
 * Hooking to functions of console object: `log`, `error`, `warn`.
 * All logs will be pushed to `logs` array, after recording is started.
 */
export default function hookToConsole(client: ReportClient, state: ReportState): void {
    console.stdlog = console.log.bind(console);

    console.stderror = console.error.bind(console);

    console.stdwarn = console.warn.bind(console);

    console.log = (...args: string[]) => {
        client.pushReport(args);
        console.stdlog(...args);
    };

    console.error = (...args: string[]) => {
        client.pushReport(args);
        console.stderror(...args);
    };

    console.warn = (...args: string[]) => {
        client.pushReport(args);
        console.stdwarn(...args);
    };

    state.isHooked = true;
}
