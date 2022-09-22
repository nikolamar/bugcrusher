/**
 * function: `wait`
 * Pause for some time.
 */
export function wait(interval: number): Promise<NodeJS.Timeout> {
  return new Promise((resolve) => setTimeout(resolve, interval));
}
