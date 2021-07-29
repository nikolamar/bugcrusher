import encryptWithAES from "./utils/encrypt-with-aes";

/**
 * function: `saveReport`
 * Save screen recording and reports from history array to two files.
 */
export default function saveReport(this: ReportState, name: string): void {
    let text;

    const fileName = name || `reports_${new Date().toLocaleString()}.txt`;

    try {
        text = JSON.stringify(this.history);
    } catch(err) {
        throw Error(`Can't stringify report!`);
    }

    if (this.options.key) {
        text = encryptWithAES(this.options.key, text);
    }

    const file = new File([text], fileName, {type: 'text/plain;charset=utf-8'});

    saveAs(file, fileName);
}