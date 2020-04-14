var plist = document.querySelector(".p-list").querySelectorAll("li img"),
  plistli = document.querySelector(".p-list").querySelectorAll("li"),
  ppic = document.querySelector(".p-pic img");
// 商品详情页
for (var i = 0; i < plist.length; i++) {
  plist[i].addEventListener("mouseover", function() {
    // this.src 就是我们点击图片的路径   images/2.jpg
    // console.log(this.src);
    // 把这个路径 this.src 给body 就可以了
    ppic.src = this.src;
    this.classname = "active";
  });
}

for (var i = 0; i < plistli.length; i++) {
  plistli[i].addEventListener("mouseover", function() {
    for (var i = 0; i < plistli.length; i++) {
      plistli[i].className = "";
    }
    // this.src 就是我们点击图片的路径   images/2.jpg
    // console.log(this.src);
    // 把这个路径 this.src 给body 就可以了
    this.className = "active";
  });
}
