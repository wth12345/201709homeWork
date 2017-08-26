/**
 * Created by Administrator on 2017/8/25 0025.
 */
var oTab = document.getElementById("tab");
var str = "";
str += "<ul>";
for (var i = 1; i < 10; i++) {
    str += "<li>";
    for (var j = 1; j < i + 1; j++) {
        str += "<span>";
        str += "" + j + "x" + i + "=" + (j * i) + "";
        str += "</span>";
    }
    str += "</li>";
}
str += "</ul>";
oTab.innerHTML = str;

var oLis = oTab.getElementsByTagName("li");
console.log(oLis);
for (var n = 0; n < oLis.length; n++) {
    console.log(oLis);
    oLis[n].className = "bg" + (n % 3 + 1);
}