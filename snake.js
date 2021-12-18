
class Snake{
    constructor(x, y, size) {
        this.x = y
        this.y = y
        this.size = size
        this.toil = [{x:this.x, y:this.y}]
        this.rotateX = 0
        this.rotatey = 1
}

move(){
    var newRect;
     if(this.rotateX == 1){
        newRect = {
            x: this.tail[this.tail.length - 1].x + this.size
            y: this.tail[this.tail.length - 1].y
        }
     }else if(this.rotateX == -1){
        newRect = {
            x: this.tail[this.tail.length - 1].x - this.size
            y: this.tail[this.tail.length - 1].y
        }
     }else if(this.rotateX == 1){
        newRect = {
            x: this.tail[this.tail.length - 1].x, 
            y: this.tail[this.tail.length - 1].y + this.size
        }
     }else if(this.rotateY == -1){
        newRect = {
            x: this.tail[this.tail.length - 1].x, 
            y: this.tail[this.tail.length - 1].y - this.size
        }
    }

     this.tail.shift()
     this.tail.push(newRect)
}

class Apple{
    constructor(){
        console.log("apple")
        console.log(snake.size)
        var isTouching;
        while(true){
            isTouching = false;
            this.x = Math.floor(Math.random() * cavnas.width / snake.size) * snake.size
            this.y = Math.floor(Math.random() * cavnas.height / snake.size) * snake.size
            for(var i = 0; i < snake.tail.length;i++){
                if(this.x == snake.tail[i].x && this.y == snake.tail[i].y){
                    isTouching = true
                }
            } 
            console.log(this.x , this.y)
            this.size = snake.size
            this.color = "red"
            if(!isTouching){
                break; 
            }
        }
    }  
}

var cavnas = document.getElementById("cavnas")

var snake = new Snake(20,20,20);

var apple = new Apple();

var cavnasContext = cavnas.getContext('2d');

window.onload = ()=>{
    gameLoop();
}

function gameLoop(){
    setinterval(show, 1000/20) // here 15 is our fps value
}

function show() {
    update();
    draw();
}




function update(){
    cavnasContext.elearRect(0,0, cavnas.width, cavnas.height)
    console.log("update")
    snake.move()
    eatApple()
    checkHtWall();

}

function checkHtWall() {
    var headTail = snake.tail[snake.tail.length -1]
    if(headTail.x == - snake.size) {
        headTai.x = cavnas.width - snake.size
    }else if(headTail.x == - snake.size) {
        headTai.x = 0
    }else if(headTail.y == - snake.size) {
        headTai.y = cavnas.height - snake.size
    }else if(headTail.y == cavnas.height) {
        headTail.y = 0
    }
    
}

function eatApple() {
    if(snake.tail[snake.tail.length -1].x == apple.x &&
        snake.toil[snake.toil.length - 1].y == apple.y){
            snake.tail[snake.tail.length] = {x:apple.x, y: apple.y}
            apple = new Apple();
        }
}

function draw(){
    createRect(0,0,cavnas.width, cavnas.height, "black")
    createRect(0,0, cavnas.width, cavnas.height)
    for(var i =0; i < snake.tail.length, i++){
        createRect(snake.tail[i].x + 2.5, snake.tail[i].y + 2.5,
            snake.size - 5, snake.size- 5, 'white')
    }

    cavnasContext.font = "20px Arial"
    cavnasContext.fillStyle = "#00FF42"
    cavnasContext.fillText("Score: "+ (snake.tail.length -1),
    cavnas.width - 120, 18);
    createRect(apple.x, apple.y, apple.size, apple.size, apple.color)
}

function createRect(x,y,width, height,color) {
    cavanasContext.fillStyle = color 
    cavanasContext.fillRect(x,y,width,height)
}

window.addEventListener("keydown", (event)=>{
    setTimeout(() => {
        if(event.keyCode == 37 && snake.rotateX != 1){
            snake.rotateX = 1
            snake.rotateX = 0; 
        
        } else if(event.keyCode == 38 && snake.rotateY != 1){
            snake.rotateX = 0
            snake.rotateX = -1; 
        
        } else if(event.keyCode == 39 && snake.rotateX != -1){
            snake.rotateX = 1
            snake.rotateX = 0; 
        
        } else if(event.keyCode == 40 && snake.rotateY != -1){
            snake.rotateX = 0
            snake.rotateX = 1; 
        
    }, 1)
})