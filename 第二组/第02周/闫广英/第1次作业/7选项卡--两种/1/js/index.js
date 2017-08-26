/**
 * Created by Administrator on 2017/8/25 0025.
 */
var oTab = document.getElementById("tab");
var oLis = oTab.getElementsByTagName("li");
var oDiv = oTab.getElementsByTagName("div");
function changeTab(n) {
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className = "";
        oDiv[i].className = "";
    }
    oLis[n].className = "select";
    oDiv[n].className = "select";
}
for (var i = 0; i < oLis.length; i++) {
    // (function (i) {
    //     oLis[i].onclick = function(){changeTab(i)};
    // })(i);
    oLis[i].onclick=(function (i) {
        return function () {
            changeTab(i);
        }
    })(i);
}
