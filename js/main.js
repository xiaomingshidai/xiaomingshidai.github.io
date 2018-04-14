var tag1 = true;
var tag2 = false;
var tag3 = false;
var tag4 = false;
$(".can-popup").mouseenter(function () {
    // if(t!=null)clearTimeout(t);
    //
    // t=null;
    $(".can-popup").append("<ul class='popup-ul'><li>一般在职证明</li><li>政审情况证明</li><li>亲属关系证明</li></ul>")

}).mouseleave(function () {
    // clearTimeout(t);
    $(".popup-ul").remove()
    // setTimeout(function () {
    //     $(".can-popup").append("<ul class='popup-ul'><li>一般在职证明</li><li>政审情况证明</li><li>亲属关系证明</li></ul>")
    // },400);
    // clearTimeout(t);


})
function navClick(gongdan, contentBox) {
    $(gongdan).css({"background": "#fff", "color": "#259ae5"})
    $(gongdan).siblings().not($(".gongdan-menu")).css({"background": "#e4e6e9", "color": "#666"})
    // // $(this).siblings().not($(".gongdan-menu")).$(".triangle").remove()
    // $(this).siblings().$(".triangle").remove()
    $(gongdan).find($("span")).addClass("triangle")
    $(gongdan).siblings().find($("span")).removeClass("triangle")
    contentBox.show()
    contentBox.siblings().not($(".tag-bar")).hide()
}
// function cancelTag(num, gongdan) {
//     var canceltag = ".cancel-tag"+num;
//     var contentbox = ".content-box"+num;
//     $(".tag-bar").on('click', canceltag,function () {
//
//         $(contentbox).css("display","none")
//         gongdan.remove()
//         tag[num - 1] = false;
//
//     })
// }
// function addTab(link) {
//     // 如果tab已存在，则显示该tab内容
//     if ($("#" + $(link).attr("rel")).length != 0){
//         //隐藏其他tab
//         $(".tag-bar li").removeClass("current");
//         $("#" + $(link).attr("rel") + "_content").siblings().hide();
//         //$("#content div").hide();
//         $("#" + $(link).attr("rel")).parent().addClass("current");
//         $("#" + $(link).attr("rel") + "_content").show();
//         return;
//     };
//
//     // 隐藏tab
//     $("#tabs li").removeClass("current");
//     $("#" + $(link).attr("rel") + "_content").siblings().hide();
//     //$("#content div").hide();
//
//     // 添加对应的tab
//     $("#tabs").append("<li class='current'><a class='tab' id='" +
//         $(link).attr("rel") + "' href='#'>" + $(link).html() +
//         "</a><a href='#' class='remove'>x</a></li>");
//
//     // 展示tab对应内容
//     $("#" + $(link).attr("rel") + "_content").show();
// };
// $(".nav-list a").click(function() {
//     addTab($(this));
//     $(this).parent().addClass("active");
//     $(this).parent().siblings().removeClass("active");
// });

function selectdTag(thisTag) {
    $(thisTag).addClass("current-tag")
    $(thisTag).siblings().not($(".tag-bar>li:nth-of-type(1)")).removeClass("current-tag")
}


$(".gongdan1").click(function () {
    // var gongdan1 = document.getElementsByClassName("gongdan1");
    //
    // var text1 = gongdan1.innerText;
    // console.log(text1.toString());
    // console.log(text1);
    navClick(this, $(".content-box1"));
    if(tag1 == false){
        $(".tag-bar").append("<li class='xinjian current-tag'>新建工单<span class='cancel-tag1'></span></li>");
        tag1 = true;
    }
    selectdTag($(".xinjian"))
})
// $(".xinjian").click(function () {
//     $(this).css({"background":"#259ae5", "color":"#fff"})
//     $(this).siblings().not($(".tag-bar>li:nth-last-of-type(1)")).css({"backgroung":"rgba(153, 219, 242, .5)", "color":"#000"})
// })
// $(".xinjian").click(function () {
//     $(this).addClass("current-tag")
//     $(this).siblings().not($(".tag-bar>li:nth-of-type(1)")).removeClass("current-tag")
// })
// $(".cancel-tag1").click(function () {
//     $(".content-box1").hide()
//     $(".xinjian").remove()
//     tag1 = false
// })
$(".tag-bar").on('click', ".cancel-tag1",function (e) {

    $(".content-box1").hide()
    $(".xinjian").remove()
    // $(".content-box1").show()
    tag1 = false;
    e.stopPropagation()
}).on('click', ".xinjian", function () {

    selectdTag($(".xinjian"))
    $(".content-box1").show()
    $(".content-box1").siblings().not($(".tag-bar")).hide()
})

// $(".gongdan2").click(function () {
//     navClick(this, $(".content-box2"));
//     if(tag2 == false){
//         $(".tag-bar").append("<li class='daiban'>代办工单<span class='cancel-tag2'></span></li>");
//         tag2 = true;
//     }
// })
$(".gongdan2").click(function () {
    navClick(this,  $(".content-box2"));
    if(tag2 == false){
        $(".tag-bar").append("<li class='daiban current-tag'>代办工单<span class='cancel-tag2'></span></li>")
        tag2 = true;
    }
    selectdTag($(".daiban"))
})
// cancelTag(2, $(".daiban"))
// $(".daiban").click(function () {
//     console.log(aaa)
//     $(this).addClass("current-tag")
//     $(this).siblings().not($(".tag-bar>li:nth-of-type(1)")).removeClass("current-tag")
// })
// $(".tag-bar").on('click', ".daiban", function () {
//     console.log(aaa)
//     $(this).addClass("current-tag")
//     $(this).siblings().not($(".tag-bar>li:nth-of-type(1)")).removeClass("current-tag")
// })
$(".tag-bar").on('click', ".cancel-tag2",function (e) {

    $(".content-box2").hide()
    $(".daiban").remove()
    $(".content-box1").show()
    tag2 = false;
    e.stopPropagation()
}).on('click', ".daiban", function () {

    selectdTag($(".daiban"))
    $(".content-box2").show()
    $(".content-box2").siblings().not($(".tag-bar")).hide()
})

// $(".cancel-tag2").click(function () {
//     $(".content-box2").css("display","none")
//     $(".daiban").remove()
//     tag[1] = false
// })
$(".gongdan3").click(function () {
    navClick(this, $(".content-box3"));
    if(tag3 == false){
        $(".tag-bar").append("<li class='wode current-tag'>我的工单<span class='cancel-tag3'></span></li>");
        tag3 = true;
    }
    selectdTag($(".wode"))
})
$(".wode").click(function () {
    $(this).addClass("current-tag")
    $(this).siblings().not($(".tag-bar>li:nth-of-type(1)")).removeClass("current-tag")
})
$(".tag-bar").on('click', ".cancel-tag3",function (e) {

    $(".content-box3").hide()
    $(".wode").remove()
    $(".content-box1").show()
    tag3 = false;
    e.stopPropagation()
}).on('click', ".wode", function () {

    selectdTag($(".wode"))
    $(".content-box3").show()
    $(".content-box3").siblings().not($(".tag-bar")).hide()
})
$(".gongdan4").click(function () {
    navClick(this, $(".content-box4"));
    if(tag4 == false){
        $(".tag-bar").append("<li class='yiban current-tag'>已办工单<span class='cancel-tag4'></span></li>");
        tag4 = true;
    }
    selectdTag($(".yiban"))
})
$(".yiban").click(function () {
    $(this).addClass("current-tag")
    $(this).siblings().not($(".tag-bar>li:nth-of-type(1)")).removeClass("current-tag")
})
$(".tag-bar").on('click', ".cancel-tag4",function (e) {

    $(".content-box4").hide()
    $(".yiban").remove()
    $(".content-box1").show()
    tag4 = false;
    e.stopPropagation()
}).on('click', ".yiban", function () {

    selectdTag($(".yiban"))
    $(".content-box4").show()
    $(".content-box4").siblings().not($(".tag-bar")).hide()
})
// $(".gongdan4").click(function () {
//     navClick(this, $(".content-box4"));
// })
$(".hide-button").click(function () {
    $(".nav").css({"width":"5%"})
    $(".nav-list, .repository").hide()
    $(".content").css({"width": "95%"})
    $(".mini-nav-list").show()
})
$(".show-button").click(function () {
    $(".nav").css({"width": "20%"})
    $(".mini-nav-list").hide()
    $(".content").css({"width": "80%"})
    $(".nav-list, .repository").show()
})