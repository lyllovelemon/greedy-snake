# greedy-snake
>JavaScript版本贪吃蛇小游戏
## 实现
### 活动区域
活动区域暂定为一个10*10的内容区域
### 蛇的食物
鸡蛋用css实现很简单，不再赘述。需要注意的是鸡蛋的位置是随机生成的，
需要使用Math.random()函数。
```javascript
let eggX=Math.floor(Math.random()*10)
let eggY=Math.floor(Math.random()*10)
```

### 蛇的活动
蛇的位置怎么用数据结构表示?

活动区域可以看作二维平面直角坐标系，x，y表示横坐标和纵坐标，因此作者使用数组表示蛇的位置。
```javascript
let snakeArr=[{x:0,y:0}]
```
ArrowUp方向的坐标值计算方法不一样。以向上移动为例，每
上移一个块，y轴坐标减1(坐标轴从0开始)
```javascript
document.addEventListener('keydown',function(e){
    if(e.key==='ArrowUp'){
        snakeArr.push({
                        x:snakeArr[0].x-1,
                        y:snakeArr[0].y
                    })
    }
})
```
其他方向的移动同理。

### 蛇吃蛋
怎么辨别蛇吃到蛋了呢？其实很简单，只要蛇的位置和蛋位置重叠，即两者的x，y坐标值都相同，即蛇吃到蛋。

蛇吃蛋以后，蛋的位置会被蛇覆盖，即蛇的数组新增坐标元素。蛇的身体变长。
```javascript
document.addEventListener('keydown',function(e){
    if(e.key==='ArrowUp'){
        snakeArr.push({
                        x:snakeArr[0].x-1,
                        y:snakeArr[0].y
                    })
      if(snakeArr[0].x===eggX&&snakeArr[0].y===eggY) {
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
})
```

### 碰撞检测
蛇碰到墙壁后，游戏结束。怎么检测到蛇是否碰壁？

超出活动区域即碰壁，即蛇头的横坐标小于0或者大于9,或者纵坐标小于0大于9

## 作者
* **lyllovelemon** - *Initial work* - [PurpleBooth](https://github.com/lyllovelemon)
