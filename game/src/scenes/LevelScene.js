import { CST } from '../modules/CST'
import { LEVEL } from '../modules/Level'
import { LEVELCONFIG } from '../modules/LevelConfig'

export class LevelScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LEVEL
        })
    }
    init(data) {
        if (Object.keys(data).length == 0) {
            console.error('No data was received from the loading scene')
        }

        this.DATA = data.DATA
        this.GAMEPLAY = data.GAMEPLAY
        this.GAMEPLAY.MAX_AUTONOMY = data.MAX_AUTONOMY
        this.GAMEPLAY.DIST_MULTIPLIER = 1
        this.GAMEPLAY.AUTONOMY_MULTIPLIER = 1
        this.GAMEPLAY.ACTIVE_POWERUPS = []
        this.CLICKABLE = true

        if (data.hasOwnProperty('script_key')) {
            this.script = LEVELCONFIG.LEVELS[data.script_key].script
        }
    }
    preload() {
        // constant between levels - will be in general "generateLevel" function
        this.visual = {
            map_place: document.getElementById('gm-place'),
            map_directions: document.getElementById('gm-directions')
        }

        this.visual.map_place.style.display = 'block'
        LEVEL.updateGMapsUrl(this)
    }
    create() {

        // open routes are the white squares that signal an available route slot
        // the first slot is always occupied (home)
        this.visual.openRoutes = [ null ]
        // closed routes are the grey squares that signal an unavailable route slot
        // first and second routes will never be closed, as the first route is always set
        this.visual.closedRoutes = [ null, null ]

        this.input.mouse.disableContextMenu()
        LEVEL.setupInterface(this)

        LEVEL.placePowerUps(this)

        for (let i in this.GAMEPLAY.destinations) {
            LEVEL.placeDestinationSquare(this, i)
        }

        LEVEL.setupBatteryBar(this)

        LEVEL.placeRouteBar(this)

        for (let i = 0; i < 8; i++) {
            LEVEL.placeRouteSlot(this, i, CST.POS.ROUTE.SLOT[0] + i * CST.POS.ROUTE.SLOT_GAP, CST.POS.ROUTE.SLOT[1])
        }

        LEVEL.setupRoutes(this)

        this.visual.goButton = LEVEL.setupGoButton(this)

        if (this.script !== undefined) {
            this.script(this)
            this.script = undefined
        }

    }

}
