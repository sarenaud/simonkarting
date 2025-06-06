namespace SpriteKind {
    export const Car = SpriteKind.create()
    export const wheel = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`wallCenter`, function (sprite, location) {
    game.setGameOverScoringType(game.ScoringType.LowScore)
    info.setScore(game.runtime() / 10)
    game.gameOver(true)
    game.setGameOverMessage(true, "GAME OVER!")
    game.reset()
})
tiles.setCurrentTilemap(tilemap`level 1`)
Render.setViewMode(ViewMode.raycastingView)
let mySprite = Render.getRenderSpriteInstance()
let Car = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 9 9 9 . . . . . . 9 9 9 . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    a a 2 2 6 2 6 6 6 6 2 6 2 2 2 2 
    a a 2 6 6 2 6 6 6 2 6 6 6 2 2 2 
    a a 2 6 6 2 2 2 2 2 6 6 6 6 2 2 
    a a 2 6 6 2 2 2 2 2 6 6 6 6 2 2 
    a a 2 6 6 2 6 6 6 2 6 6 6 2 2 2 
    a a 2 2 6 2 6 6 6 6 2 6 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 9 9 9 . . . . . . 9 9 9 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Car)
Car.follow(mySprite)
mySprite.z = 0
Car.z = 1
let steering_wheel = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 9 9 9 . . . . . . 9 9 9 . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    a a 2 2 6 2 6 6 6 6 2 6 2 2 2 2 
    a a 2 6 6 2 6 6 6 2 6 6 6 2 2 2 
    a a 2 6 6 2 2 2 2 2 6 6 6 6 2 2 
    a a 2 6 6 2 2 2 2 2 6 6 6 6 2 2 
    a a 2 6 6 2 6 6 6 2 6 6 6 2 2 2 
    a a 2 2 6 2 6 6 6 6 2 6 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 9 9 9 . . . . . . 9 9 9 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Car)
steering_wheel.setFlag(SpriteFlag.RelativeToCamera, true)
tiles.placeOnTile(Car, tiles.getTileLocation(2, 13))
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 13))
fakeButtons.setPlayerConnected(controller.player2, true)
controller.player2.moveSprite(mySprite, 100, 100)
fakeButtons.pressMultiplayerButton(controller.player2, ControllerButton.Right)
let time = 0
game.onUpdate(function () {
    Car.sayText(game.runtime() / 1000)
})
