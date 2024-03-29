export const CST = {
    SCENES: {
        LOAD: 'LOAD',
        MENU: 'MENU',
        LEVEL: 'LEVEL',
        DEFER: 'DEFER',
        CREDITS: 'CREDITS',
        MODAL: 'MODAL',
        MODAL_T: 'MODAL_TRANSITION',
        MULTIMODAL: 'MULTIMODAL',
        MODAL_EOL: 'MODAL_END_OF_LEVEL',
        MODAL_GAMEOVER: 'MODAL_GAMEOVER',
    },
    STYLES: {
        BATTERY_PERCENTAGE: {
            font: '500 16px Roboto',
            fill: '#fff',
        },
        DEST_USES: {
            font: '500 16px Roboto',
            fill: '#fff',
        },
        FLAVOR_SMALL: {
            font: '500 18px Roboto',
            fill: '#fff',
        },
        FLAVOR_LARGE: {
            font: '500 32px Roboto',
            fill: '#fff',
        },
        END_OF_LEVEL: {
            font: '500 24px Roboto',
            fill: '#202020',
        },
    },
    DEST: {
        HOME: 'level_dest_home',
        HOME_OUT: 'level_dest_home_out',
        WORK: 'level_dest_work',
        WORK_OUT: 'level_dest_work_out',
        SUPERMARKET: 'level_dest_supermarket',
        SUPERMARKET_OUT: 'level_dest_supermarket_out',
        GYM: 'level_dest_gym',
        GYM_OUT: 'level_dest_gym_out',
        SELECTED: 'level_dest_selected',
    },
    LEVEL: {
        BACKGROUND: 'level_bg',
        BATTERY: {
            FULL: 'level_battery_full_bar',
            USABLE: 'level_battery_usable_bar',
            USED: 'level_battery_used_bar',
        },
        ROUTE: {
            OPEN: 'level_route_open',
            CLOSED: 'level_route_closed',
            BAR_EMPTY: 'level_route_bar_empty',
            BAR_FULL: 'level_route_bar_full',
            HOME: 'level_route_home',
            WORK: 'level_route_work',
            SUPERMARKET: 'level_route_supermarket',
            GYM: 'level_route_gym',
        },
        GO: {
            UNUSABLE: 'level_go_unusable',
            USABLE: 'level_go_button'
        },
        LOAD: 'level_load_overlay',
        POWERUPS: {
            BAR: 'level_powerups_bar',
            HOT: 'level_powerups_hot',
            HEAT: 'level_powerups_heat',
            COLD: 'level_powerups_cold',
            COOL: 'level_powerups_cool',
            DOUBLETIME: 'level_powerups_doubletime',
            POWERDOWN: 'level_powerups_powerdown',
            SELECTED: 'level_powerups_selected',
            DISABLED: 'level_powerups_disabled',
        }
    },
    ICONS: {
        TEMPERATURE: 'level_temperature',
        HUMIDITY: 'level_humidity',
        BATTERY: 'level_battery',
    },
    PLACEHOLDER: {
        MAP: 'level_map',
        POWERUPS: 'level_powerups',
    },
    TITLE: {
        BACKGROUND: 'title_bg',
        PLAY: 'title_play_button',
        OPTIONS: 'title_options_button',
        CREDITS: 'title_credits_button',
        MINI: 'title_mini'
    },
    CREDITS: {
        TEXT: 'credits_text',
        BUTTON: 'credits_button',
    },
    MOUSE: {
        CLICK_RELEASE: 'pointerup',
        CLICK: 'pointerdown',
        HOVER: 'pointerover',
        LEAVE: 'pointerout'
    },
    WEATHER: {
        REGULAR: {
            ICON: 'weather_regular',
            HUMIDITY: 35,
            TEMP: 20,
        },
        CHILL: {
            ICON: 'weather_chill',
            HUMIDITY: 70,
            TEMP: 9,
        },
        COLD: {
            ICON: 'weather_cold',
            HUMIDITY: 85,
            TEMP: -6,
        },
        HOT: {
            ICON: 'weather_hot',
            HUMIDITY: 0,
            TEMP: 35,
        },
        WARM: {
            ICON: 'weather_warm',
            HUMIDITY: 10,
            TEMP: 29,
        },
    },
    ANIM: {
        DURATION: 1000
    },
    MODALS: {
        BG: 'modals_bg',
        INTRO: 'modals_intro',
        TUTORIAL_1: 'modals_tutorial_1',
        TUTORIAL_2: 'modals_tutorial_2',
        TUTORIAL_3: 'modals_tutorial_3',
        POWERUPS_1: 'modals_powerups_1',
        POWERUPS_2: 'modals_powerups_2',
        POWERUPS_3: 'modals_powerups_3',
        NOMOREHELP: 'modals_nomorehelp',
        EOL: 'modals_end-of-level',
        GAMEOVER_1: 'modals_end-of-game_1',
        GAMEOVER_2: 'modals_end-of-game_2',
        LEVEL_FAILED: 'modals_level-failed',
        WAIT_LOAD: 'modals_wait-load',
        NAV_L: 'modals_nav_l',
        NAV_R: 'modals_nav_r',
        BTN_INTRO: 'modals_btn_letsgo',
        BTN_TUTORIAL: 'modals_btn_gotit',
        BTN_POWERUPS: 'modals_btn_imready',
        BTN_NOMOREHELP: 'modals_btn_nomorehelp',
        BTN_EOL_BACK: 'modals_btn_eol_back',
        BTN_EOL_ADVANCE: 'modals_btn_eol_advance',
        BTN_MAINMENU: 'modals_btn_mainmenu',
        BTN_TRYAGAIN: 'modals_btn_tryagain',
        BTN_FINE: 'modals_btn_fine',
    },
    CALC: {
        BASE: 376.59,
        PREDICTED_DIST_TO_EMISSIONS: 122.3, // https://www.eea.europa.eu/data-and-maps/daviz/average-emissions-for-new-cars-7
        PREDICTED_DIST_TO_FUEL: 7 / 100,    // https://www.iea.org/reports/fuel-consumption-of-cars-and-vans
        PREDICTED_FUEL_TO_MONEY: 1.78,      // https://precoscombustiveis.dgeg.gov.pt/estatistica/preco-medio-diario/ - Visited: 19/08/2022
        MARGIN: 0.01
    },
    POS: {
        WEATHER: {
            ICON: [53, 24],
            HUMIDITY: {
                ICON: [177, 64],
                TEXT: [130 + 47/2, 59 + 35/2],
            },
            TEMPERATURE: {
                ICON: [177, 29],
                TEXT: [130 + 47/2, 24 + 35/2],
            },
        },
        BATTERY: {
            ICON: [53, 496],
            TEXT: [105 + 67.55/2, 496 + 72/2],
            BAR: [192, 513],
            PERCENTAGE: [693.24 + 54.76/2, 513 + 37/2],
        },
        MAP: [142, 127],
        POWERUPS: {
            BAR: [52, 127],
            X: 62.4,
            Y: 137.4,
            DELTA: 62.4,
        },
        ROUTE: {
            BAR: [53, 437],
            SLOT: [53, 409],
            SLOT_GAP: 90,
        },
        GO: [593, 48],
    }
}