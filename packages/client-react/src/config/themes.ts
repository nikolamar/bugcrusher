import { colors } from './colors';
import { animations } from './animations';
import { transitions } from './transitions';

export const themes = {
    default: {
        animation: animations.animation_fast,
        transition: transitions.transition_fast,
        colors: {
            text: colors.color_white_1,
            body: colors.color_black_1,
            bar: colors.color_red_1,
        }
    },
    light: {
        animation: animations.animation_fast,
        transition: transitions.transition_fast,
        colors: {
            text: colors.color_white_1,
            body: colors.color_white_1,
            bar: colors.color_red_1,
        }
    },
    dark: {
        animation: animations.animation_fast,
        transition: transitions.transition_fast,
        colors: {
            text: colors.color_black_1,
            body: colors.color_white_1,
            bar: colors.color_red_1,
        }
    }
}