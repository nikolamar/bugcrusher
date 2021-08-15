// react components props
type BugCrushserProps = {
    children: any,
    buttonLabel: string,
    recordingLabel: string
};

// theme typings
type Theme = Record<string, { colors: { text: string, body: string }}>;

type UseThemeReturn = [
    theme: Theme[string],
    themeLoaded: boolean,
    setMode: (theme: Theme[string]) => void
];

declare module '@bug-crusher/client-react' {
    function useWithClient(client: any): any;
    const BugCrusher: React.FC<any>;
}