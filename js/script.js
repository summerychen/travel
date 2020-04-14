// 声明全局变量
var index = 0, //显示当前图片的索引，默认值为0
  list = document.querySelectorAll("#sub-images-li"),
  img = document.querySelectorAll(".sub-img"),
  timer = null, //定时器
  main = byId("main"),
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
  // 获取tabs下面的所有的li
  tabslia = document.querySelector(".tabs").querySelectorAll("li a"),
  longlinelia = document.querySelector(".longline").querySelectorAll("li a"),
  shortlinelia = document.querySelector(".shortline").querySelectorAll("li a"),
  neilinelia = document.querySelector(".neiline").querySelectorAll("li a"),
  bianlinelia = document.querySelector(".bianline").querySelectorAll("li a"),
  zhulinelia = document.querySelector(".zhuline").querySelectorAll("li a"),
  tilinelia = document.querySelector(".tiline").querySelectorAll("li a"),
  floatmenu = document.querySelectorAll(".float-menu ul li"),
  floatmenuc = document.querySelector(".float-menu"),
  contenttop = document.querySelectorAll(".content-top"),
  recommend = document.querySelector(".recommend"),
  // 获取邮轮签证标题
  youluntitles = document
    .querySelector(".youlun-title")
    .querySelectorAll("li a"),
  youlunli = document.querySelectorAll("#youlun-li"),
  //   获取所有圆点
  dots = document.querySelector("#dots").querySelectorAll("span"),
  // 获取二级菜单
  subrow = document.querySelectorAll(".sub-row"),
  // 获取三级子菜单
  submenutwo = document.querySelectorAll(".sub-menu-two"),
  threeinnerbox = document.querySelectorAll(".sub-menu-two-innerbox"),
  jchange = document.querySelector(".j-change a img"),
  jaddresschangeone = document.querySelector(".j-address-changeone"),
  jaddresschangetwo = document.querySelector(".j-address-changetwo"),
  jaddresschangeoneone = document.querySelector(".j-address-changeoneone"),
  jaddresschangetwotwo = document.querySelector(".j-address-changetwotwo"),
  // displayDate = document.querySelector(".displayDate"),
  jipiaotitle = document.querySelectorAll(".jipiao-title"),
  cbodyright = document.querySelectorAll("#c-body-right");
console.log(cbodyright[1]);
console.log(floatmenu.length);
// displayDate;
size = pics.length;

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
jchange.addEventListener("click", function () {
  if (jaddresschangeone.style.display == "block") {
    jaddresschangetwo.style.display = "block";
    jaddresschangeone.style.display = "none";
  } else {
    jaddresschangeone.style.display = "block";
    jaddresschangetwo.style.display = "none";
  }
  // console.log(1);
});
jchange.addEventListener("click", function () {
  if (jaddresschangeoneone.style.display == "block") {
    jaddresschangetwotwo.style.display = "block";
    jaddresschangeoneone.style.display = "none";
  } else {
    jaddresschangeoneone.style.display = "block";
    jaddresschangetwotwo.style.display = "none";
  }
  // console.log(1);
});
// 获取当前日期

// 点击下一张按钮显示下一张图片
// next.addEventListener("click",function(){
//     alert("1")
// });
addHeader(next, "click", function () {
  index++;
  if (index >= size) index = 0;
  changeImg();
});
// 点击上一张按钮显示上一张图片
addHeader(prev, "click", function () {
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
  timer = setInterval(function () {
    index++;
    if (index >= size) index = 0;
    // console.log(index);
    changeImg();
  }, 3000);
}

// 点击小圆点翻到对应图片
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
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
innerBox[0].style.display = "block";
menuItems[0].style.background = "#fff";
menuItemsa[0].style.color = "#202020";

// 鼠标滑过主菜单
for (var m = 0, idx, mlen = menuItems.length; m < mlen; m++) {
  // 给所有主菜单定义属性，标明他的索引
  menuItems[m].setAttribute("data-index", m);
  menuItems[m].addEventListener("mouseover", function () {
    subMenu.style.display = "block";
    // 显示子菜单所在的背景
    // subMenu.className = "sub-menu";
    // 获取当前主菜单的索引
    idx = this.getAttribute("data-index");
    // alert(idx);

    for (var i = 0, ilen = innerBox.length; i < ilen; i++) {
      innerBox[i].style.display = "none";
      // menuItems[i].style.background = "none";
      menuItemsa[i].style.color = "#fff";
      menuItems[i].style.background = "#202020";
    }
    innerBox[idx].style.display = "block";
    menuItems[idx].style.background = "#fff";
    menuItemsa[idx].style.color = "#202020";
  });
}
// subrow 鼠标滑过二级菜单
for (let i = 0, idx, slen = subrow.length; i < slen; i++) {
  // 给所有二级菜单定义属性，标明他的索引
  subrow[i].setAttribute("data-index", i);
  // console.log()
  subrow[i].addEventListener("mouseover", function () {
    // 获取当前二级菜单的索引
    idx = this.getAttribute("data-index");
    // console.log(idx);
    for (let j = 0, jsen = submenutwo.length; j < jsen; j++) {
      submenutwo[idx].style.display = "none";
      subrow[j].style.background = "#fff";
      // threeinnerbox[j].style.display = "none";
    }
    submenutwo[idx].style.display = "block";
    subrow[idx].style.background = "#edf0f4";
    // console.log(threeinnerbox[idx]);
    // threeinnerbox[idx].style.display = "block";
  });
  subrow[i].addEventListener("mouseout", function () {
    // 获取当前二级菜单的索引
    console.log(i);
    idx = this.getAttribute("data-index");
    submenutwo[i].style.display = "none";
  });
}

// 鼠标离开第二菜单，第二菜单关闭

innerboxtwo.addEventListener("inner-box-two", function () {
  subMenu.style.display = "none";
});
// subMenu.addEventListener("mouseover", function() {
//   subMenu.style.display = "block";
// });

// 鼠标离开第san菜单，第三菜单不显示
for (let i = 0, slen = submenutwo.length; i < slen; i++) {
  submenutwo[i].addEventListener("mouseover", function () {
    submenutwo[i].style.display = "block";
  });
}
for (let i = 0, idx, slen = submenutwo.length; i < slen; i++) {
  submenutwo[i].addEventListener("mouseout", function () {
    submenutwo[i].style.display = "none";
  });
}
// 鼠标离开第三菜单，不显示
// 鼠标进入第三菜单，显示
// 鼠标划入main，停止轮播
addHeader(main, "mouseover", stopAutoPlay);
// 鼠标离开，开始轮播
addHeader(main, "mouseout", startAutoPlay);

// 自动开启轮播
startAutoPlay();
// 手风琴广告位
// 鼠标经过list,list的宽变为大，图片向左移动，默认第一张为变大状态
for (let i = 0, lli = list.length; i < lli; i++) {
  list[0].className = "sub-images-list";
  img[0].className = "sub-img sub-images-image";
  list[i].addEventListener("mouseover", function () {
    for (let j = 0, jli = list.length; j < jli; j++) {
      list[j].className = "list";
      img[j].className = "sub-img";
    }
    list[i].className = "sub-images-list";
    img[i].className = "sub-img sub-images-image";
  });
}

for (var i = 0, idx, lilth = tabslia.length; i < lilth; i++) {
  // console.log(tabslia[i]);
  tabslia[0].style.color = "red";
  tabslia[i].setAttribute("data-index", i);
  // console.log(this.i);

  tabslia[i].addEventListener("mouseover", function () {
    //获取当前a的索引
    idx = this.getAttribute("data-index");
    for (var j = 0, jlth = tabslia.length; j < jlth; j++) {
      tabslia[j].style.color = "";
      cbodyright[j].style.display = "none";
    }
    this.style.color = "red";
    cbodyright[idx].style.display = "block";
  });
}

for (var i = 0, lilth = longlinelia.length; i < lilth; i++) {
  // console.log(tabslia[i]);
  longlinelia[0].className = "longline-lia";
  longlinelia[i].addEventListener("mouseover", function () {
    for (var j = 0, jlth = tabslia.length; j < jlth; j++) {
      longlinelia[j].className = "";
    }
    this.className = "longline-lia";
  });
}
for (var i = 0, lilth = shortlinelia.length; i < lilth; i++) {
  // console.log(tabslia[i]);
  shortlinelia[0].className = "shortline-lia";
  shortlinelia[i].addEventListener("mouseover", function () {
    for (var j = 0, jlth = shortlinelia.length; j < jlth; j++) {
      shortlinelia[j].className = "";
    }
    this.className = "shortline-lia";
  });
}
for (var i = 0, lilth = neilinelia.length; i < lilth; i++) {
  // console.log(tabslia[i]);
  neilinelia[0].className = "neiline-lia";
  neilinelia[i].addEventListener("mouseover", function () {
    for (var j = 0, jlth = neilinelia.length; j < jlth; j++) {
      neilinelia[j].className = "";
    }
    this.className = "neiline-lia";
  });
}
for (var i = 0, lilth = bianlinelia.length; i < lilth; i++) {
  // console.log(tabslia[i]);
  bianlinelia[0].className = "bianline-lia";
  bianlinelia[i].addEventListener("mouseover", function () {
    for (var j = 0, jlth = bianlinelia.length; j < jlth; j++) {
      bianlinelia[j].className = "";
    }
    this.className = "bianline-lia";
  });
}
for (var i = 0, lilth = zhulinelia.length; i < lilth; i++) {
  // console.log(tabslia[i]);
  zhulinelia[0].className = "zhuline-lia";
  zhulinelia[i].addEventListener("mouseover", function () {
    for (var j = 0, jlth = zhulinelia.length; j < jlth; j++) {
      zhulinelia[j].className = "";
    }
    this.className = "zhuline-lia";
  });
}
for (var i = 0, lilth = tilinelia.length; i < lilth; i++) {
  // console.log(tabslia[i]);
  tilinelia[0].className = "tiline-lia";
  tilinelia[i].addEventListener("mouseover", function () {
    for (var j = 0, jlth = tilinelia.length; j < jlth; j++) {
      tilinelia[j].className = "";
    }
    this.className = "tiline-lia";
  });
}
// 遍历邮轮签证标题
for (let i = 0, ylen = youluntitles.length; i < ylen; i++) {
  // console.log(i);
  youluntitles[i].addEventListener("mouseover", function () {
    // console.log(i);
    index = i;
    for (let j = 0, jlen = youluntitles.length; j < jlen; j++) {
      youlunli[j].className = "current-body hidden";
    }
    console.log(index);

    youlunli[index].className = "current-body";
  });
}

// 电梯导航
$(function () {
  toggleTool();
  var flag = true;
  document.addEventListener("scroll", function () {
    toggleTool();
    // 当页面滚动到某个内容区域，相对应的电梯导航也发生样式变化
    // 当页面被卷去的距>=对应区域偏移量，就让对应的li样式发生变化
    // 1.遍历大的模块
    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
    // 节流阀  互斥锁

    if (flag) {
      $(contenttop).each(function (i, ele) {
        if ($(document).scrollTop() >= $(ele).offset().top - 100) {
          // console.log(i);
          // 找到对应的li
          $(floatmenu).eq(i).addClass("current").siblings().removeClass();
        }
      });
    }
  });
  var toolTop = recommend.offsetTop - 100;
  // console.log(recommend.offsetTop);
  // 1.显示隐藏电梯导航
  function toggleTool() {
    //当页面滚动到recommed模块时，电梯导航才显示
    if ($(document).scrollTop() >= toolTop) {
      $(floatmenuc).fadeIn();
    } else {
      $(floatmenuc).fadeOut();
    }
  }
  // 返回顶部
  $("#fa-angle-up").click(function () {
    // console.log(111);
    $("body, html").stop().animate({
      scrollTop: 0,
    });
  });
  // 2. 点击电梯导航页面可以滚动到相应内容区域
  $(floatmenu).click(function () {
    flag = false;
    // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
    $(this).addClass("current").siblings().removeClass();
    console.log($(this).index());
    // 当我们每次点击小li 就需要计算出页面要去往的位置
    // 选出对应索引号的内容区的盒子 计算它的.offset().top
    var current = $(".w .content-left").eq($(this).index()).offset().top;
    // 页面动画滚动效果
    $("body, html").stop().animate({
      scrollTop: current,
    });
  });
});
