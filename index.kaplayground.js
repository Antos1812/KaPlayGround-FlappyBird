
// Antos projekt "Krzywy Flappy Bird"

kaplay();

loadSprite("bean", "sprites/bean.png");
loadSprite("mark", "sprites/mark.png");
loadSprite("coin", "sprites/coin.png");
setGravity(1600);




scene("game", () => {

add([text("Koślawy Flappy Bird by: Antoś"), pos(180, 24,)]);
add([sprite("coin"), pos(10, 24)]);

let score = 0;
const scoreLabel = add([text(score), pos(50, 24), ]);

onUpdate(() => {
    score++;
    scoreLabel.text = score;
});
   
const bean = add([sprite("mark"), pos(400, 400), area(), body(), color(238, 210, 2) ]);

onKeyPress("space", () => {
    bean.jump();
});


add([
    rect(width(), 60),
    pos(0, height() - 60),
    outline(7),
    area(),
    body({ isStatic: true }),
    color(100, 200, 120),
    "Ground"
]);


loop(1, () => {

add([
    rect(48, rand (30, 100)),
    area(),
    outline(4),
    pos(width(), height() - 48),
    anchor("botleft"),
    color(0, 200, 0),
    move(LEFT, 480),
    "tree", 
]);

})

loop(1, () => {

add([
    rect(48, rand (600, 1250)),
    area(),
    outline(4),
    pos(width(), height() - rand(270, 415)),
    anchor("botleft"),
    color(0, 200, 0),
    move(LEFT, 480),
    "tree", 
]);

})

bean.onCollide("tree", () => {
    addKaboom(bean.pos);
    shake();
    go("lose"); 
    
    
});

bean.onCollide("Ground", () => {
    addKaboom(bean.pos);
    shake();
    go("lose"); 
    
    
    
});

});


scene("lose", () => {
      add([text("Koniec Gry!"), pos(center()), anchor("center")]);
      add([text("Przegrałeś!"), pos(444), anchor("center")]);
      
});

go("game");


