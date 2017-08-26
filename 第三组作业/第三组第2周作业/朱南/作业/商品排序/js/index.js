/**
 * Created by lenovo on 2017/8/25.
 */
var oTab = document.getElementById("tab");
var oContent = document.getElementById("content");
var oUl = oContent.getElementsByTagName("ul")[0];
//alert(2);
var ary = null;
var  xhr =  new XMLHttpRequest();
 xhr.open("get","JSON/produce.json",false);
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
    //console.log(xhr.responseText);
     ary = utils.toJSON(xhr.responseText);
        console.log(ary);
    }
}
xhr.send(null);
//var flag = document.createDocumentFragment();
var num  ="" ;
for(var i = 0 ;i<ary.length;i++){
    num += "<li><img src='" + ary[i].img + "'>";
    num += "<span >"+ary[i].title + "</span>";
    num += "<span class='time'>" + ary[i].time + "</span>";
    num += "<span class='hot'>" + ary[i].hot + "</span>";
    num += "<span class='pric'>" + ary[i].price+ "</span></li>";

}
oUl.innerHTML += num;
