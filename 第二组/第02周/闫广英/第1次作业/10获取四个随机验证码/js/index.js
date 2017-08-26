/**
 * Created by Administrator on 2017/8/25 0025.
 */
var str1 = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
var oDiv = document.getElementById("tab");


function getMa() {
    var str = "";
    for (var i = 0; i < 4; i++) {
        str += str1[Math.ceil(Math.random() * 61)];
    }
    oDiv.innerHTML = str;
}
getMa();
oDiv.onclick = function () {
    getMa();
};