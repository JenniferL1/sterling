let mySprite = sprites.create(img`
    5 5 f f f f f f f f f f f f 1 1 
    5 5 f f 1 1 1 1 1 1 1 1 f f 1 1 
    f f 5 5 f f f f f f f f 1 1 f f 
    f f 5 5 f f f f f f f f 1 1 f f 
    f 1 f f 2 2 2 2 2 2 2 2 f f 1 f 
    f 1 f f 2 f f 2 2 f f 2 f f 1 f 
    f 1 f f 2 2 f f f f 2 2 f f 1 f 
    f 1 f f 2 2 2 2 2 2 2 2 f f 1 f 
    f 1 f f 2 2 f 2 2 f 2 2 f f 1 f 
    f 1 f f 2 2 2 2 2 2 2 2 f f 1 f 
    f 1 f f 2 2 2 f f 2 2 2 f f 1 f 
    f 1 f f 2 2 2 2 2 2 2 2 f f 1 f 
    f f 1 1 f f f f f f f f 5 5 f f 
    f f 1 1 f f f f f f f f 5 5 f f 
    1 1 f f 1 1 1 1 1 1 1 1 f f 5 5 
    1 1 f f f f f f f f f f f f 5 5 
    `, SpriteKind.Player)
mySprite.say("BABY BEATS ROCK!")
