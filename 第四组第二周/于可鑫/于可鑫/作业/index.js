var xhr=new XMLHttpRequest();
xhr.open("get","product.json",false);
xhr.onreadystatechange=function () {
    if(xhr.readyState==4 &&/^2\d{2}$/.test(xhr.status)){
        resData=utils.toJSON(xhr.responseText);
    }
};
xhr.send(null);



var oUl=document.getElementById("list");
var str ="";
for (var i = 0; i < resData.length; i++) {
    console.log(resData[i]["img"]);
    str+="<li>";
    str+="<img src='"+resData[i]["img"]+"'>";
    str+="<span>"+resData[i]["title"]+"</span>";
    str+="<span>"+resData[i]["time"]+"</span>";
    str+="<span>"+resData[i]["hot"]+"</span>";
    str+="<span>"+resData[i]["price"]+"</span>";
    str+="</li>";
}
oUl.innerHTML=str;