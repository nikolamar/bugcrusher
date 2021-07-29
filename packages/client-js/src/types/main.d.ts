export type Data = Record<string, unknown> |  Record<string, unknown>[] | string[] | string;
export type ReportPushOptions = { type?: string };
export type ReportOptions = { video?: string, key?: string, };

export type ReportClient = {
    stdlog: Console['log'],
    stderror: Console['error'],
    stdwarn: Console['warn'],

    // functions
    isHooked: () => boolean,
    isRecording: () => boolean,

    startRecording: () => void,
    stopRecording: () => void,

    pushReport: (data: Data, options?: ReportPushOptions) => void,
    getReport: () => Record<string, unknown>[],
    saveReport: () => void,
    openReport: () => any,
    saveVideo: () => void,
}

export type ReportState = {
    history: Record<string, unknown>[],
    isHooked: boolean,
    isRecording: boolean,
    isVideoReady: boolean,
    stream: any,
    recorder: any,
    chunks: any[],
    options: ReportOptions
};