namespace SpriteKind {
    export const Car = SpriteKind.create()
}
tiles.setCurrentTilemap(tilemap`level 1`)
Render.setViewMode(ViewMode.tilemapView)
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
tiles.placeOnTile(Render.getRenderSpriteInstance(), tiles.getTileLocation(2, 15))
tiles.placeOnTile(Car, tiles.getTileLocation(2, 15))
fakeButtons.setPlayerConnected(controller.player2, true)
let mySprite2 = sprites.create(img`
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . c c 
    . . . c 4 d 4 4 4 4 4 1 c c 4 c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
    . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
    f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
    . f 4 4 4 4 1 c c 4 4 d f f . . 
    . . f f 4 d 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 13))
controller.player2.moveSprite(mySprite, 55, 50)
fakeButtons.pressMultiplayerButton(controller.player2, ControllerButton.Right)
