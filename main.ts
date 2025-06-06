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
game.onUpdate(function () {
    Car.sayText(game.runtime() / 1000)
})
