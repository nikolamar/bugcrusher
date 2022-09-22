import { saveAs } from "file-saver";
// types
import type { ReportState } from "./types";

/**
 * function: `saveVideoBlob`
 * Save video Blob.
 */
export function saveVideoBlob(this: ReportState, name?: string): any {
  if (!this.isVideoReady) {
    return Promise.reject();
  }

  const blob = new Blob(this.chunks, { type: this.chunks[0].type });

  const fileName =
    (name && `${name}.mp4`) || `recording_${new Date().toLocaleString()}.mp4`;

  saveAs(blob, fileName);
}
