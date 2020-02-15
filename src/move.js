let container=document.querySelector('.container');

let eggX=Math.floor(Math.random()*10);
let eggY=Math.floor(Math.random()*10);
let egg=container.children[eggX].children[eggY];
egg.innerHTML='<div class="egg"></div>';
let snakeX=Math.floor(Math.random()*10);
let snakeY=Math.floor(Math.random()*10);
let snakeArr=[{
    x:snakeX,y:snakeY
}];

snakeArr.forEach((item,index)=>{
    let snake=container.children[item.x].children[item.y];
    if(index===0){
        snake.innerHTML='<div class="snake snake-head"></div>';
        clearInterval()
    }
    else {
        snake.innerHTML='<div class="snake snake-tail"></div>';
    }
});
var arrow='ArrowRight';//默认移动方向-右
function move() {
    let snakeHead=snakeArr[0];
    if(arrow==='ArrowUp'){
        let snakeArr2=[];
        snakeArr.forEach((item,index)=>{
            if(index===0){
                snakeArr2.push({
                    x:snakeArr[index].x-1,
                    y:snakeArr[index].y
                });
            }
            else {
                snakeArr2.push({
                    x:snakeArr[index-1].x,
                    y:snakeArr[index-1].y
                });
            }
        })
        snakeArr=snakeArr2;
        if(snakeHead.x===eggX&&snakeHead.y===eggY){
            eggX=Math.floor(Math.random()*10);
            eggY=Math.floor(Math.random()*10);
            egg=container.children[eggX].children[eggY];
            egg.innerHTML='<div class="egg"></div>';
            let snakeTail=snakeArr[snakeArr.length-1];
            snakeArr.push({
                x:snakeTail.x-1,
                y:snakeTail.y
            })
        }
    }
    if(arrow==='ArrowDown'){
        let snakeArr2=[]
        snakeArr.forEach((item,index)=>{
            if(index===0){
                snakeArr2.push({
                    x:snakeArr[index].x+1,
                    y:snakeArr[index].y
                })
            }
            else {
                snakeArr2.push({
                    x:snakeArr[index-1].x,
                    y:snakeArr[index-1].y
                })
            }
        })
        snakeArr=snakeArr2
        snakeHead.x+=1
        if(snakeHead.x===eggX&&snakeHead.y===eggY) {
            //旧蛋被吃，生成新蛋
            eggX=Math.floor(Math.random()*10);
            eggY=Math.floor(Math.random()*10);
            egg=container.children[eggX].children[eggY];
            egg.innerHTML='<div class="egg"></div>'
            let snakeTail=snakeArr[snakeArr.length-1]
            snakeArr.push({
                x:snakeTail.x+1,
                y:snakeTail.y
            })
        }
    }
    if(arrow==='ArrowLeft'){
        let snakeArr2=[]
        snakeArr.forEach((item,index)=>{
            if(index===0){
                snakeArr2.push({
                    x:snakeArr[index].x,
                    y:snakeArr[index].y-1
                })
            }
            else {
                snakeArr2.push({
                    x:snakeArr[index-1].x,
                    y:snakeArr[index-1].y
                })
            }
        })
        snakeArr=snakeArr2;
        if(snakeHead.x===eggX&&snakeHead.y===eggY) {
            //旧蛋被吃，生成新蛋
            eggX=Math.floor(Math.random()*10);
            eggY=Math.floor(Math.random()*10);
            egg=container.children[eggX].children[eggY];
            egg.innerHTML='<div class="egg"></div>'
            let snakeTail=snakeArr[snakeArr.length-1]
            snakeArr.push({
                x:snakeTail.x,
                y:snakeTail.y-1
            })
        }
    }
    if(arrow==='ArrowRight'){
        let snakeArr2=[]
        snakeArr.forEach((item,index)=>{
            if(index===0){
                snakeArr2.push({
                    x:snakeArr[index].x,
                    y:snakeArr[index].y+1
                })
            }
            else {
                snakeArr2.push({
                    x:snakeArr[index-1].x,
                    y:snakeArr[index-1].y
                })
            }
        })
        snakeArr=snakeArr2
        snakeHead.y+=1
        if(snakeHead.x===eggX&&snakeHead.y===eggY) {
            //旧蛋被吃，生成新蛋
            eggX=Math.floor(Math.random()*10);
            eggY=Math.floor(Math.random()*10);
            egg=container.children[eggX].children[eggY];
            egg.innerHTML='<div class="egg"></div>'
            let snakeTail=snakeArr[snakeArr.length-1]
            snakeArr.push({
                x:snakeTail.x,
                y:snakeTail.y+1
            })
        }
    }
    //删除移动前的贪吃蛇(清除贪吃蛇前一次的位置)
    container.querySelectorAll('.snake').forEach((item,index)=>{
        item.parentElement.removeChild(item);
    });
    //生成贪吃蛇
    snakeArr.forEach((item,index)=>{
        if(item.x<0||item.y<0||item.x>9||item.y>9){
            clearInterval()
            return;
        }
        var snake=container.children[item.x].children[item.y];

        console.log('snake------>',snake)
        if(index===0){
            snake.innerHTML='<div class="snake snake-head"></div>';

        }
        else {
            snake.innerHTML='<div class="snake snake-tail"></div>';
        }
    })
}
//键盘监听
document.addEventListener('keydown',function(e){
    arrow=e.key;
    console.log('arrow------>',arrow,e);
    move();

});
setInterval(function () {
    move();
},1000)



