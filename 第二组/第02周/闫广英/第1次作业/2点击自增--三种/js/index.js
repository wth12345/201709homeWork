/**
 * Created by Administrator on 2017/8/24 0024.
 */


var oDivs=document.getElementById("div1");

// var n=0;
// oDivs.onclick=function () {
//     this.innerHTML=++n;
// };


// ~function () {
//     var n=0;
//     oDivs.onclick=function(){
//         this.innerHTML=++n;
//     }
// }();


var n=0;
oDivs.onclick=(function () {
    return function () {
        this.innerHTML=++n;
    }
})();