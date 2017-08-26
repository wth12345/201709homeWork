var oUl=document.getElementById("oUl");
var xhr=new XMLHttpRequest();
    xhr.open("get","json/json.json",false);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && /^2\d{2}$/.test(xhr.status)){
            obj=utlis.toJson(xhr.responseText);
        }
    };
    xhr.send(null);
//console.log(obj);
var str='';
for(var i=0;i<obj.length;i++){
    str+="<li>";
    str+="<img src='"+obj[i]["img"]+"' alt=''>";
    str+="<h4>"+obj[i].title+"</h4>";
    str+="<p>"+obj[i].time+"</p>";
    str+="<span>"+obj[i].hot+"</span>";
    str+="<em>"+obj[i].price+"</em>";
    str+="</li>"

}
oUl.innerHTML=str;