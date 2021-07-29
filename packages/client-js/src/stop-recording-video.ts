// types
import type { ReportState } from "./types/main";

/**
 * function: `stopRecordingVideo`
 * Simply sets recording of desktop window that user can choose.
 */
export default function stopRecordingVideo(state: ReportState): void {
    if (!state.options.video) {
        throw Error(`Please specify media source, can't stop recording.`);
    }

    state.recorder.onstop = () => {
        state.isVideoReady = true;
    };

    state.recorder.stop();
}