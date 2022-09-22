// types
import type { ReportClient, ReportState } from "./types";

/**
 * function: `hookToConsole`
 * Hooking to functions of console object: `log`, `error`, `warn`.
 * All logs will be pushed to `logs` array, after recording is started.
 */
export function hookToConsole(client: ReportClient, state: ReportState): void {
  client.stdlog = console.log.bind(console);

  client.stderror = console.error.bind(console);

  client.stdwarn = console.warn.bind(console);

  console.log = (...args: string[]) => {
    client.pushReport(args);
    client.stdlog(...args);
  };

  console.error = (...args: string[]) => {
    client.pushReport(args);
    client.stderror(...args);
  };

  console.warn = (...args: string[]) => {
    client.pushReport(args);
    client.stdwarn(...args);
  };

  state.isHooked = true;
}
