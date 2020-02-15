let container=document.querySelector('.container');
console.dir(container);
let eggX=Math.floor(Math.random()*10);
let eggY=Math.floor(Math.random()*10);
let egg=container.children[eggX].children[eggY];
egg.innerHTML='<div class="egg"></div>';
let snakeX=Math.floor(Math.random()*10);
let snakeY=Math.floor(Math.random()*10);
let snakeArr=[{
    x:snakeX,y:snakeY
}]
console.log('snakeArr',snakeArr)
snakeArr.forEach((item,index)=>{
    let snake=container.children[snakeX].children[snakeY];
    if(index===0){
        snake.innerHTML='<div class="snake snake-head"></div>';
    }
    else {
        snake.innerHTML='<div class="snake snake-tail"></div>';
    }
})

//键盘监听
document.addEventListener('keydown',function(e){
    console.log('keydown------->',e);
    let snakeHead=snakeArr[0]
    if(e.key==='ArrowUp'){
        let snakeArr2=[]
        snakeArr.forEach((item,index)=>{
            if(index===0){
                snakeArr2.push({
                    x:snakeArr[index].x-1,
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
        snakeHead.x-=1;
        //蛇吃到蛋
        if(snakeHead.x===eggX&&snakeHead.y===eggY) {
            //旧蛋被吃，生成新蛋
            eggX=Math.floor(Math.random()*10);
            eggY=Math.floor(Math.random()*10);
            egg=container.children[eggX].children[eggY];
            egg.innerHTML='<div class="egg"></div>'
            let snakeTail=snakeArr[snakeArr.length-1]
            snakeArr.push({
                x:snakeTail.x-1,
                y:snakeTail.y
            })
        }
    }
    if(e.key==='ArrowDown'){
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
    if(e.key==='ArrowLeft'){
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
        snakeArr=snakeArr2
        snakeHead.y-=1
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
    if(e.key==='ArrowRight'){
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
    //删除上一个贪吃蛇
    container.querySelectorAll('.snake').forEach((item,index)=>{
        item.parentElement.removeChild(item);
    })
    //生成贪吃蛇
    snakeArr.forEach((item,index)=>{
        if(item.x<0||item.y<0){
            alert('game over')
            return
        }
        var snake=container.children[item.x].children[item.y];
        if(index===0){
            snake.innerHTML='<div class="snake snake-head"></div>';
        }
        else {
            snake.innerHTML='<div class="snake snake-tail"></div>';
        }
    })

})