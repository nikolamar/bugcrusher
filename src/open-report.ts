import { decryptWithAES } from "./utils/decrypt-with-aes";
// types
import type { ReportState } from "./types";

/**
 * function: `saveReport`
 * Save screen recording and reports from history.
 */
export async function openReport(
  this: ReportState,
  file: File
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(Error("Please provide file to open."));
    }

    const reader = new FileReader();

    reader.addEventListener("load", (event: any) => {
      let result;

      if (this.options.key) {
        try {
          result = decryptWithAES(
            this.options.key,
            event?.currentTarget?.result
          );
        } catch (err) {
          reject(Error(`Can't decrypt report!`));
        }
      }

      try {
        result = JSON.parse(
          this.options.key ? result : event?.currentTarget?.result
        );
      } catch (err) {
        reject(Error(`Can't parse report!`));
      }

      if (!Array.isArray(result)) {
        reject(Error(`Report should be array!`));
      }

      resolve(result);
    });

    reader.readAsText(file);
  });
}
