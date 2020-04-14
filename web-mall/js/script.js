// 声明全局变量
var index = 0, //显示当前图片的索引，默认值为0
  list = document.querySelectorAll("#sub-images-li"),
  img = document.querySelectorAll(".sub-img"),
  timer = null, //定时器
  // main = byId("main"),
  main = document.querySelector("#main"),
  menuContent = byId("menu-content"),
  menuItems = document.querySelectorAll(".menu-item"),
  menuItemsa = document.querySelectorAll(".menu-item a span"),
  subMenu = document.querySelector(".sub-menu"),
  innerboxtwo = document.querySelector(".inner-box-two"),
  innerBox = document.querySelectorAll(".inner-box"),
  prev = byId("prev"), //上一张
  next = byId("next"), //下一张
  banner = document.getElementById("banner"),
  pics = document.querySelectorAll(".banner-slide"),
  youlunli = document.querySelectorAll("#youlun-li"),
  //   获取所有圆点
  dots = document.querySelector("#dots").querySelectorAll("span"),
  // displayDate;
  size = pics.length;
console.log(dots.length);

//封装getElementById()
function byId(id) {
  return typeof id === "string" ? document.getElementById(id) : id;
}

/*封装通用事件绑定方法
    element绑定事件的DOM元素
    事件名
    事件处理程序
*/
function addHeader(element, type, handler) {
  // 针对非ie浏览器
  if (element.addEventListener) {
    element.addEventListener(type, handler, true);
    // ie浏览器支持DOM2级
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
    // ie浏览器不支持DOM2级
  } else {
    element["on" + type] = handler;
  }
}

addHeader(next, "click", function() {
  index++;
  if (index >= size) index = 0;
  changeImg();
});
// 点击上一张按钮显示上一张图片
addHeader(prev, "click", function() {
  index--;
  if (index < 0) index = size - 1;
  changeImg();
});

// 清除自动轮播
function stopAutoPlay() {
  if (timer) {
    clearInterval(timer);
  }
}

// 自动轮播
function startAutoPlay() {
  timer = setInterval(function() {
    index++;
    if (index >= size) index = 0;
    // console.log(index);
    changeImg();
  }, 3000);
}

// 点击小圆点翻到对应图片
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    index = i;
    changeImg();
  });
}

//   将代码重复部分进行封装
// 切换图片
function changeImg() {
  // 遍历所有图片，将图片隐藏，将圆点上的类清除
  for (var i = 0; i < size; i++) {
    pics[i].style.display = "none";
    dots[i].className = "";
  }
  //   显示当前图片
  pics[index].style.display = "block";
  //   console.log(index);
  //   当前圆点高亮显示
  dots[index].className = "active";
}

// 鼠标划入main，停止轮播
addHeader(main, "mouseover", stopAutoPlay);
// 鼠标离开，开始轮播
addHeader(main, "mouseout", startAutoPlay);
main.addEventListener("mouseover", function() {
  console.log(111);
  stopAutoPlay;
});
main.addEventListener("mouseout", function() {
  startAutoPlay;
});

// 自动开启轮播
startAutoPlay();
