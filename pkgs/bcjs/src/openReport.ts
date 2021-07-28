import decryptWithAES from "./utils/decryptWithAES";

/**
 * function: `saveReport`
 * Save screen recording and reports from history.
 */
export default async function openReport(this: ReportState, files: File[]): Promise<any> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.addEventListener('load', (event) => {
            let result;

            if (this.options.cryptoKey) {
                try {
                    // @ts-ignore
                    result = decryptWithAES(this.options.cryptoKey, event?.currentTarget?.result);
                } catch(err) {
                    reject(Error(`Can't decrypt report!`));
                }
            }

            try {
                // @ts-ignore
                result = JSON.parse(this.options.cryptoKey ? result : event?.currentTarget?.result);
            } catch(err) {
                reject(Error(`Can't parse report!`));
            }

            if (!Array.isArray(result)) {
                reject(Error(`Report should be array!`));
            }

            resolve(result);
        });

        if (files && files[0]) {
            reader.readAsText(files[0]);
        }
    });
}