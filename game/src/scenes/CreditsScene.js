import { CST } from '../CST'
import { LEVELCONFIG } from '../LevelConfig'

export class CreditsScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.CREDITS
        })
    }
    preload() {

    }
    create() {
        this.add.image(0, 0, CST.TITLE.BACKGROUND).setOrigin(0).setDepth(0)
        this.add.image(75, 41, CST.CREDITS.TEXT).setOrigin(0).setDepth(1)
        const button = this.add.image(686, 46, CST.CREDITS.BUTTON).setOrigin(0).setDepth(2)
        button.setInteractive()
        button.on(CST.MOUSE.CLICK_RELEASE, () => {
            this.scene.start(CST.SCENES.MENU)
        })
    }
}