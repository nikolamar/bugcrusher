import { retry } from './utils/retry';
import { saveVideoBlob } from './save-video-blob';

/**
 * function: `saveVideo`
 * Save video recording.
 */
export function saveVideo(this: ReportState, name?: string): void {
    if (!this.options.video) {
        throw new Error(`Please specify media source. Can't save screen recording.`);
    }

    retry(saveVideoBlob.bind(this, name));
}