import { colors } from './colors';
import { transitions } from './transitions';

export const themes = {
    default: {
        transition: transitions.transition_fast,
        colors: {
            text: colors.color_white_1,
            body: colors.color_black_1,
            bar: colors.color_red_1,
        }
    },
    light: {
        transition: transitions.transition_fast,
        colors: {
            text: colors.color_white_1,
            body: colors.color_white_1,
            bar: colors.color_red_1,
        }
    },
    dark: {
        transition: transitions.transition_fast,
        colors: {
            text: colors.color_black_1,
            body: colors.color_white_1,
            bar: colors.color_red_1,
        }
    }
}