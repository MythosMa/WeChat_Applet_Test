// pages/canvas/canvasTest.js
var rectY = 0;
var positionArray = new Array();
var widthCount = 20;
var heightCount = 30;
var snake = new Array();
var snakeLength = 3;
var snakeRectWidth = 0;
var snakeRectHeight = 0;
var snakeDirection = 0; //0 右 1 下 2 左 3 上
var directionRight = 0;
var directionDown = 1;
var directionLeft = 2;
var directionUp = 3;
var startTouchPosition = {
  x: 0,
  y: 0
};
var foodPosition = {
  x: 0,
  y: 0,
  color: "red",
};
var speed = 0;
var lastColor = "";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvasWidth: 200,
    canvasHeight: 200,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      canvasWidth: wx.getSystemInfoSync().windowWidth,
      canvasHeight: wx.getSystemInfoSync().windowHeight,
    });

    snakeRectWidth = this.data.canvasWidth / widthCount;
    snakeRectHeight = this.data.canvasHeight / heightCount;

    for (var i = 0; i < widthCount; i++) {
      positionArray[i] = new Array();
      for (var j = 0; j < heightCount; j++) {
        positionArray[i][j] = {
          x: i * snakeRectWidth,
          y: j * snakeRectHeight
        };
      }
    }

    snake[0] = {
      x: 2,
      y: 0,
      color: this.getRandomColor(),
    };
    snake[1] = {
      x: 1,
      y: 0,
      color: this.getRandomColor(),
    };
    snake[2] = {
      x: 0,
      y: 0,
      color: this.getRandomColor(),
    };

    this.refreshFood();
  },

  getRandomColor: function() {
    var color = "";
    var index = 0;
    do {
      color = ["red", "green", "yellow", "blue", "orange", "white"];
      index = this.getRandomInt(0, color.length);
    } while (lastColor === color[index]);
    lastColor = color[index];

    return lastColor;
  },

  refreshFood: function() {
    while (1) {
      var foodX = this.getRandomInt(0, widthCount);
      var foodY = this.getRandomInt(0, heightCount);
      var isInSnake = false;
      for (var i = 0; i < snakeLength; i++) {
        if (foodX === snake[i].x) {
          isInSnake = true;
          break;
        }
        if (foodY === snake[i].y) {
          isInSnake = true;
          break;
        }
      }
      if (!isInSnake) {
        foodPosition = {
          x: foodX,
          y: foodY,
          color: this.getRandomColor(),
        };
        return;
      }
    }
  },

  getRandomInt: function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //使用wx.createContext获取绘图上下文
    var context = wx.createCanvasContext("firstCanvas", this);
    console.log(context);

    // context.setStrokeStyle("green");
    // context.rect(0, 0, 200, 200);
    // context.stroke();
    // context.setFillStyle("green");
    // context.fill();


    // context.draw() ;

    // wx.chooseImage({
    // 	success: function(res) {
    // 		console.log(res) ;
    // 		context.drawImage(res.tempFilePaths[0], 0, 0) ;
    // 		context.draw() ;
    // 	},
    // });

    var frameCount = 0;

    function draw() {

      for (var i = 0; i < snakeLength; i++) {
        console.log(snake[i]);
        var x = snake[i].x;
        var y = snake[i].y;
        var color = snake[i].color;

        context.beginPath();
        context.rect(positionArray[x][y].x, positionArray[x][y].y, snakeRectWidth, snakeRectHeight);
        context.setFillStyle(color);
        context.fill();
      }

      context.beginPath();
      context.rect(positionArray[foodPosition.x][foodPosition.y].x, positionArray[foodPosition.x][foodPosition.y].y, snakeRectWidth, snakeRectHeight);
      context.setFillStyle(foodPosition.color);
      context.fill();

      context.draw();

    }

    var currentContext = this;

    function animation() {
      console.log("speed : " + speed);
      if (frameCount % (60 - speed) === 0) {
        if (snakeDirection === directionRight) {
          var currentPositionX = snake[0].x + 1;
          if (currentPositionX >= widthCount) {
            currentPositionX = 0;
          }

          for (var i = snakeLength; i > 0; i--) {
            snake[i] = {
              x: snake[i - 1].x,
              y: snake[i - 1].y,
              color: i === snakeLength ? "red" : snake[i].color,
            };
          }
          snake[0] = {
            x: currentPositionX,
            y: snake[0].y,
            color: snake[0].color,
          };

        } else if (snakeDirection === directionDown) {
          var currentPositionY = snake[0].y + 1;
          if (currentPositionY >= heightCount) {
            currentPositionY = 0;
          }

          for (var i = snakeLength; i > 0; i--) {
            snake[i] = {
              x: snake[i - 1].x,
              y: snake[i - 1].y,
              color: i === snakeLength ? "red" : snake[i].color,
            };
          }
          snake[0] = {
            x: snake[0].x,
            y: currentPositionY,
            color: snake[0].color,
          };
        } else if (snakeDirection === directionLeft) {
          var currentPositionX = snake[0].x - 1;
          if (currentPositionX < 0) {
            currentPositionX = widthCount - 1;
          }

          for (var i = snakeLength; i > 0; i--) {
            snake[i] = {
              x: snake[i - 1].x,
              y: snake[i - 1].y,
              color: i === snakeLength ? "red" : snake[i].color,
            };
          }
          snake[0] = {
            x: currentPositionX,
            y: snake[0].y,
            color: snake[0].color,
          };
        } else if (snakeDirection === directionUp) {
          var currentPositionY = snake[0].y - 1;
          if (currentPositionY < 0) {
            currentPositionY = heightCount - 1;
          }

          for (var i = snakeLength; i > 0; i--) {
            snake[i] = {
              x: snake[i - 1].x,
              y: snake[i - 1].y,
              color: i === snakeLength ? "red" : snake[i].color,
            };
          }
          snake[0] = {
            x: snake[0].x,
            y: currentPositionY,
            color: snake[0].color,
          };
        }

        currentContext.checkEat();
        draw();
        frameCount = 0;
      }
      frameCount++;
      requestAnimationFrame(animation);
    };
    animation();
  },

  checkEat: function() {
    if (snake[0].x === foodPosition.x && snake[0].y === foodPosition.y) {
      snake[snakeLength].color = foodPosition.color;
      snakeLength++;
      speed = (snakeLength - 3) * 4 > 59 ? 59 : (snakeLength - 3) * 4;
      this.refreshFood();
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  touchStartCallback(event) {
    console.log(event);
    var startTouch = event.touches[0];
    startTouchPosition = {
      x: startTouch.x,
      y: startTouch.y
    };
  },

  touchMoveCallback(event) {
    console.log(event);
  },

  touchEndCallback(event) {
    console.log(event);
    var endTouch = event.changedTouches[0];
    var endXLength = endTouch.x - startTouchPosition.x;
    var endYLength = endTouch.y - startTouchPosition.y;

    if (Math.abs(endXLength) >= Math.abs(endYLength)) {
      if (snakeDirection !== directionRight && snakeDirection !== directionLeft) {
        if (endXLength > 0) {
          snakeDirection = directionRight;
        } else {
          snakeDirection = directionLeft;
        }
      }

    } else {
      if (snakeDirection !== directionDown && snakeDirection !== directionUp) {
        if (endYLength > 0) {
          snakeDirection = directionDown;
        } else {
          snakeDirection = directionUp;
        }
      }
    }
  },

  touchCancelCallback(event) {
    console.log(event);
  },
})