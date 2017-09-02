var jsonObj = null;
var xhr = new XMLHttpRequest();
xhr.open("get","prodct.json",false);
xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && /^2\d{2}$/.test( xhr.status)){
        jsonObj = utils.toJSON(xhr.responseText);
    }

};
xhr.send(null);
var  oUl = document.getElementById("oul");
var str  ="";
for(var i =0;i<jsonObj.length;i++){
    str+="<li>";
    str+="<img src='"+jsonObj[i]["img"]+"'>";
    str+="<span>"+jsonObj[i]["title"]+"</span>";
    str+="<span>"+jsonObj[i]["time"]+"</span>";
    str+="<span>"+jsonObj[i]["hot"]+"</span>";
    str+="<span>"+jsonObj[i]["price"]+"</span>";
    str+="</li>";
}
oUl.innerHTML = str;
