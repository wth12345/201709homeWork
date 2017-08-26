/**
 * Created by Administrator on 2017/8/25/025.
 */
    //拿到数据
var jsonObj=null;
var xhr=new XMLHttpRequest();
xhr.open("get","package.json",false);
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
        jsonObj=utils.toJSON(xhr.responseText)
    }
}
xhr.send(null);
console.log(jsonObj);
//绑定到页面
var oUl=document.getElementById("list");
var oLis=document.getElementsByTagName("li");
var str="";
var flg=document.createDocumentFragment();
for(var i=0;i<jsonObj.length;i++){
    str+="<li>";
    str+="<img src='"+jsonObj[i]["5"]+"'>";
    str+="<p>"+jsonObj[i]["4"]+"</p>";
    str+="<p>"+jsonObj[i]["3"]+"</p>";
    str+="<p>"+jsonObj[i]["2"]+"</p>";
    str+="<p>"+jsonObj[i]["1"]+"</p>";
    str+="</li>"
}
oUl.innerHTML=str;





