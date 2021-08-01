import { encryptWithAES }from "./utils/encrypt-with-aes";
// types
import type { ReportState } from "../types/main";

/**
 * function: `saveReport`
 * Save screen recording and reports from history array to two files.
 */
export function saveReport(this: ReportState, name?: string): void {
    let text;

    const fileName = name && `${name}.txt` || `reports_${new Date().toLocaleString()}.txt`;

    try {
        text = JSON.stringify(this.history);
    } catch(err) {
        throw new Error(`Can't stringify report!`);
    }

    if (this.options.key) {
        text = encryptWithAES(this.options.key, text);
    }

    const file = new File([text], fileName, {type: 'text/plain;charset=utf-8'});

    saveAs(file, fileName);
}