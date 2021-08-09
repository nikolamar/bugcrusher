// react components props
type ToastProps = {
    children: React.ReactChild,
};

type ToasterProps = {
    children: React.ReactChild,
};

type HiddenButtonProps = {
    width?: string,
    bottom?: string,
    children: string | React.ReactChild,
    onClick?: (val: MouseEventHandler<HTMLDivElement>) => void,
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
    const Toast: React.FC<ToastProps>;
    const Toaster: React.FC<ToasterProps>;
    const HiddenButton: React.FC<HiddenButtonProps>;
}