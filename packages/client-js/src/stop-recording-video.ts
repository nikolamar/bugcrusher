/**
 * function: `stopRecordingVideo`
 * Simply sets recording of desktop window that user can choose.
 */
export function stopRecordingVideo(state: ReportState): void {
    if (!state.options.video) {
        throw new Error(`Please specify media source, can't stop recording.`);
    }

    state.recorder.onstop = () => {
        state.isVideoReady = true;
    };

    state.recorder.stop();

    state.isRecordingVideo = false;
}