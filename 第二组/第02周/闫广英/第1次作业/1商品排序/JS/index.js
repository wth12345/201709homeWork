/**
 * Created by Administrator on 2017/8/25 0025.
 */
var transfer = null;
var xhr = new XMLHttpRequest();
xhr.open("get", "json/data.json", false);
xhr.onreadystatechange=function () {
    if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
        console.log(utils);
        transfer = utils.toJSON(xhr.responseText);

    }
};
xhr.send(null);

var oUl = document.getElementById("oUl");
var str = "";
for (var i = 0; i < transfer.length; i++) {
    str += "<li>";
    str += "<img src='" + transfer[i]["img"] + "'>";
    str += "<span>" + transfer[i]["agree"] + "</span>";
    str += "<span>" + transfer[i]["transmit"] + "</span>";
    str += "<span>" + transfer[i]["collect"] + "</span>";
    str += "</li>";
}
oUl.innerHTML = str;