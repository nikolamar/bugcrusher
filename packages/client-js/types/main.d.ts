type Data = Record<string, unknown> |  Record<string, unknown>[] | string[] | string;
type ReportPushOptions = { type?: string };
type ReportOptions = { video?: any, key?: string, };

type ReportClient = {
    stdlog: Console['log'],
    stdinfo: Console['info'],
    stderror: Console['error'],
    stdwarn: Console['warn'],

    // functions
    isHooked: () => boolean,
    isRecording: () => boolean,

    startRecording: (options?: { video: boolean }) => void,
    stopRecording: () => void,

    pushReport: (data: Data, options?: ReportPushOptions) => void,
    getReport: () => Record<string, unknown>[],
    saveReport: (name?: string) => void,
    saveVideo: (name?: string) => void,
    openReport: (file: File) => any,
    on: (
        event: 'reportchange' | 'recordchange',
        callback: (val: any
    ) => void) => void,
};

type ReportState = {
    report: Record<string, unknown>[],
    isHooked: boolean,
    isRecording: boolean,
    isRecordingVideo: boolean,
    isVideoReady: boolean,
    stream: any,
    recorder: any,
    chunks: any[],
    options: ReportOptions,
    events: Record<string, (val: any) => void>,
};

declare module '@bug-crusher/client-js' {
    function createClient(options: ReportOptions): ReportClient;
}