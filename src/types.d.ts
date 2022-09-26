type Data =
  | Record<string, unknown>
  | Record<string, unknown>[]
  | string[]
  | string;
type ReportPushOptions = { type?: string };
type ReportOptions = { video?: any; key?: string };

type ReportClient = {
  stdlog: Console["log"];
  stderror: Console["error"];
  stdwarn: Console["warn"];

  // functions
  isHooked: () => boolean;
  isRecording: () => boolean;

  startRecording: () => void;
  stopRecording: () => void;
  addOnRecordingStopListener: (listener: () => void) => Symbol;
  removeOnRecordingStopListener: (symbol: Symbol) => void;

  pushReport: (data: Data, options?: ReportPushOptions) => void;
  getReport: () => Record<string, unknown>[];
  saveReport: (name?: string) => void;
  saveVideo: (name?: string) => void;
  openReport: (file: File) => any;
  destroy: () => void;
};

type ReportState = {
  history: Record<string, unknown>[];
  isHooked: boolean;
  isRecording: boolean;
  isVideoReady: boolean;
  stream: any;
  recorder: any;
  chunks: any[];
  options: ReportOptions;
  recorderListeners: {
    stop: Map
  };
};

export function createClient(options?: ReportOptions): ReportClient;
