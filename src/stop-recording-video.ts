// types
import type { ReportState } from "./types";

/**
 * function: `stopRecordingVideo`
 * Sets recording of desktop window that user can choose.
 */
export function stopRecordingVideo(state: ReportState): void {
  if (!state.options.video) {
    throw new Error(`Please specify media source, can't stop recording.`);
  }

  state.isRecording = false;
  state.isVideoReady = true;

  state.recorderListeners.stop.forEach((listener: () => void) => {
    if(typeof listener === 'function'){
      listener()
    }
  });
}
