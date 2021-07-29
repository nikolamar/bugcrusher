import { saveAs } from 'file-saver';
import { retry } from './utils/retry';
// types
import type { ReportState } from './types/main';

/**
 * function: `saveVideo`
 * Save video recording.
 */
export default function saveVideo(this: ReportState, name: string): void {
    if (!this.options.video) {
        throw new Error(`Please specify media source. Can't save screen recording.`);
    }

    try {
        retry(saveVideoBlob.bind(this, name));
    } catch(err) {
        console.log(err);
    }
}

function saveVideoBlob(this: ReportState, name: string): any {
    if (!this.isVideoReady) {
        return Promise.reject();
    }

    const blob = new Blob(this.chunks, { type: this.chunks[0].type });

    const fileName = name && `${name}.mp4` || `recording_${new Date().toLocaleString()}.mp4`;

    saveAs(blob, fileName);
}