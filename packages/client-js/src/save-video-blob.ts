import { saveAs } from 'file-saver';
import { videoPrefix } from './config/static';

/**
 * function: `saveVideoBlob`
 * Save video Blob.
 */
export function saveVideoBlob(this: ReportState, name?: string): any {
    if (!this.isVideoReady) {
        return Promise.reject();
    }

    const blob = new Blob(this.chunks, { type: this.chunks[0].type });

    const fileName = name && `${name}.mp4` || `${videoPrefix}${new Date().toLocaleString()}.mp4`;

    saveAs(blob, fileName);
}