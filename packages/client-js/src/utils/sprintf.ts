/**
 * function: `sprintf`
 * Simply formats array of string into one string message.
 */
export default function sprintf(args: string[]): string {
    let counter = 1;

    return args[0].replace(/%s/g, () => args[counter++]);
}