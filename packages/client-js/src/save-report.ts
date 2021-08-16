import { saveAs } from 'file-saver';
import { reportPrefix } from './config/static';
import { encryptWithAES }from "./utils/encrypt-with-aes";
import { setStorage } from './utils/storage';

/**
 * function: `saveReport`
 * Save screen recording and reports from state.report array to two files.
 */
export function saveReport(this: ReportState, name?: string, type = 'file'): void {
    if (type === 'localstorage') {
        setStorage(name || reportPrefix, this.report);
        return;
    }

    let text;

    const fileName = name && `${name}.txt` || `${reportPrefix}${new Date().toLocaleString()}.txt`;

    try {
        text = JSON.stringify(this.report);
    } catch(err) {
        throw new Error(`Can't stringify report!`);
    }

    if (this.options.key) {
        text = encryptWithAES(this.options.key, text);
    }

    const file = new File([text], fileName, {type: 'text/plain;charset=utf-8'});

    saveAs(file, fileName);
}