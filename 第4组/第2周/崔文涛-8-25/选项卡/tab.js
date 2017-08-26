// // /**
// //  * Created by Administrator on 2017/8/2/002.
// //  */
var oTab = document.getElementById("tab");
var oLis = oTab.getElementsByTagName("li");
var oDiv = oTab.getElementsByTagName("div");
function  tabChange(n) {
for(var i=0;i<oLis.length;i++){
    oLis[i].className="";
    oDiv[i].className="";
}
oLis[n].className="select";
    oDiv[n].className="select";
}
for(var i=0;i<oLis.length;i++){
    oLis[i].wenTao=i;
    oLis[i].onclick=function () {
        tabChange(this.wenTao)
    }
}
//
//
// /////////////////////////////////////////////////////////
// var oTab =document.getElementById("tab");
// var oLis =oTab.getElementsByTagName("li");
// var oDiv =oTab.getElementsByTagName("div");
// var obj = 0;
// function tabchange(n) {
//     oLis[obj].className = "";
//     oDiv[obj].className = "";
//     oLis[n].className = "select";
//     oDiv[n].className = "select";
//     obj = n;
// }
//     oLis[0].onclick = function () {
//         // oLis[obj].className = "";
//         // oDiv[obj].className = "";
//         // oLis[0].className = "select";
//         // oDiv[0].className = "select";
//         tabchange(0);
//     }
//     oLis[1].onclick = function () {
//         // oLis[obj].className = "";
//         // oDiv[obj].className = "";
//         // oLis[1].className = "select";
//         // oDiv[1].className = "select";
//         tabchange(1);
//     }
//     oLis[2].onclick = function () {
//         // oLis[obj].className = "";
//         // oDiv[obj].className = "";
//         // oLis[2].className = "select";
//         // oDiv[2].className = "select";
//         tabchange(2);
//     };
//     ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// var oTab =document.getElementById("tab");
// var oLis =oTab.getElementsByTagName("li");
// var oDiv =oTab.getElementsByTagName("div");
// for(var i=0;i<oLis.length;i++){
//     oLis[i].zhufeng=i;
//     oLis[i].onclick=function () {
//         changetab(this.zhufeng);
//     }
//     var obj =0;
//     function changetab(n) {
//         oLis[obj].className="";
//         oDiv[obj].className="";
//         oLis[n].className="select";
//         oDiv[n].className="select";
//         obj = n;
//
//     }
// }