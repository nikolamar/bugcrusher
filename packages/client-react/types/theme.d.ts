declare module 'theme' {
    export interface ThemeConfig {
        variables: Reacord<string, string>,
        antdOverrides: Reacord<string, string>,
    }
    export const theme: any;
    export const themeLight: any;
}