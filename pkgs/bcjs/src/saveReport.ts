import encryptWithAES from "./utils/encryptWithAES";

/**
 * function: `saveReport`
 * Save screen recording and reports from history array to two files.
 */
export default function saveReport(this: ReportState): void {
    let text;

    const fileName = `reports_${new Date().toLocaleString()}.txt`;

    try {
        text = JSON.stringify(this.history);
    } catch(err) {
        throw Error(`Can't stringify report!`);
    }

    if (this.options.cryptoKey) {
        text = encryptWithAES(this.options.cryptoKey, text);
    }

    const file = new File([text], fileName, {type: 'text/plain;charset=utf-8'});

    saveAs(file, fileName);
}