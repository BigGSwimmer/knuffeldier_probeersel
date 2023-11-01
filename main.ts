input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    music.play(music.stringPlayable("C D E C C D E C ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E F G - E F G - ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . # #
        . . . # #
        # # # # #
        . . . . .
        # . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C5 - - - - - - - ", 120), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Angry)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    index = 0
    obstacles = []
    bird = game.createSprite(0, 2)
    bird.set(LedSpriteProperty.Blink, 300)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    blad_steen_schaar = randint(0, 2)
    if (blad_steen_schaar == 0) {
        basic.showIcon(IconNames.Scissors)
    } else if (blad_steen_schaar == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
let startstop = 0
let emptyObstaceleY = 0
let blad_steen_schaar = 0
let obstacles: game.LedSprite[] = []
let index = 0
let bird: game.LedSprite = null
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    # . . . #
    . # . # .
    # . # . #
    `)
basic.showLeds(`
    . # . # .
    # . . . #
    . . . . .
    # . . . #
    . # . # .
    `)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
basic.clearScreen()
basic.forever(function () {
    let ticks = 0
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstaceleY = randint(0, 4)
        for (let index22 = 0; index22 <= 4; index22++) {
            if (index22 != emptyObstaceleY) {
                obstacles.push(game.createSprite(2, index22))
            }
        }
    }
    for (let obstacele3 of obstacles) {
        if (obstacele3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacele3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            let Score = 0
            startstop = 0
            basic.showString("GAME OVER")
            basic.showNumber(Score)
        }
    }
    basic.pause(1000)
})
