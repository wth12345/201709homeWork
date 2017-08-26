
var resData = null;
var xhr = new XMLHttpRequest();
xhr.open("get", "json/binddata.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
        resData = utils.toJSON(xhr.responseText);
    }
};
xhr.send(null);
var oUl=document.getElementById("main");
var frg=document.createDocumentFragment();
for(var i=0;i<resData.length;i++){
    var oLi=document.createElement("li");
    oLi.innerHTML+= "<img src='"+resData[i].img+"'>";
    oLi.innerHTML+= "<span>"+resData[i].title+"</span>";
    oLi.innerHTML+= "<span>"+resData[i].time+"</span>";
    oLi.innerHTML+= "<span>"+resData[i].hot+"</span>";
    oLi.innerHTML+= "<span>"+resData[i].price+"</span>";
    frg.appendChild(oLi);
}
oUl.appendChild(frg);