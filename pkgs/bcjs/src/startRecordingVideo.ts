/**
 * function: `startRecordingVideo`
 * Simply sets recording of desktop window that user can choose.
 */
export default async function startRecordingVideo(state: ReportState): Promise<void> {
    // @ts-ignore
    if (!navigator?.mediaDevices?.getDisplayMedia) {
        throw Error(`Your browser doesn't support screen recording`);
    }

    if (!state.options.video) {
        throw Error(`Please specify media source. Can't start recording.`);
    }

    state.isVideoReady = false;

    try {
        // @ts-ignore
        state.stream = await navigator.mediaDevices.getDisplayMedia({
            video: state.options.video
        });
    } catch(err) {
        throw Error(`You'r browser doesn't support screen recording!`);
    }

    state.recorder = new MediaRecorder(state.stream);

    state.recorder.ondataavailable = (e: BlobEvent) => state.chunks.push(e.data);

    state.recorder.start();
}