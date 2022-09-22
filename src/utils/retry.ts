import { wait } from "./wait";

/**
 * function: `retry`
 * Retry N times, pause between.
 */
export async function retry(
  fn: () => Promise<void>,
  retriesLeft = 10,
  interval = 500
): Promise<void> {
  try {
    return await fn();
  } catch (error: any) {
    await wait(interval);
    if (retriesLeft === 0) {
      throw new Error(error);
    }
    return await retry(fn, --retriesLeft, interval);
  }
}
