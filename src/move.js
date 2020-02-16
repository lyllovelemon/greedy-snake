let snakeArr=[],eggX,eggY,egg;
let container=document.querySelector('.container');
let xMax=9,yMax=9;
function init() {
    initEgg()
    let snakeX=Math.floor(Math.random()*10);
    let snakeY=Math.floor(Math.random()*10);
     snakeArr=[{
        x:snakeX,y:snakeY
    }];


    snakeArr.forEach((item,index)=>{
        let snake=container.children[item.x].children[item.y];
        if(index===0){
            snake.innerHTML='<div class="snake snake-head"></div>';
            clearTimeout()
        }
        else {
            snake.innerHTML='<div class="snake snake-tail"></div>';
        }
    });
}
function initEgg(){
    eggX=Math.floor(Math.random()*10);
    eggY=Math.floor(Math.random()*10);
    egg=container.children[eggX].children[eggY];
    egg.innerHTML='<div class="egg"></div>';
}
init()
function clearEgg() {
   let eggElements=document.querySelector('.egg')
    if(eggElements){
        eggElements.parentElement.removeChild(eggElements)
    }

}
var arrow='ArrowRight';//默认移动方向-右
function move() {
    let snakeHead=snakeArr[0];
    if(arrow==='ArrowUp'){
        let snakeArr2=[];
        snakeArr.forEach((item,index)=>{
            if(index===0){
                if(snakeArr[index].x<=0){
                    restart()
                    return
                }
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
                //越界
                if(snakeArr[index].x>=xMax){
                    restart()
                    return
                }
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
                //越界
                if(snakeArr[index].y<=0){
                    restart()
                    return
                }
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
                if(snakeArr[index].y>=yMax){
                    restart()
                    return
                }
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
        snakeArr=snakeArr2;
        if(snakeArr.length&&snakeArr[0].y<9){
            snakeHead.y+=1;

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
    }
    //删除移动前的贪吃蛇(清除贪吃蛇前一次的位置)
    container.querySelectorAll('.snake').forEach((item,index)=>{
        item.parentElement.removeChild(item);
    });
    //生成贪吃蛇
    snakeArr.forEach((item,index)=>{
        var snake=container.children[item.x].children[item.y];
        if(!snake){
            return
        }
        if(index===0){
            snake.innerHTML='<div class="snake snake-head"></div>';

        }
        else{
            snake.innerHTML='<div class="snake snake-tail"></div>';
        }
    })
    console.log('蛇--->',snakeArr)
}
//键盘监听
document.addEventListener('keydown',function(e){
    arrow=e.key;
    console.log('arrow------>',arrow,e);
    move();

});
function restart(){
    alert('Game over')
    clearEgg()
    init()
}
setInterval(function () {
    move();
},500)



