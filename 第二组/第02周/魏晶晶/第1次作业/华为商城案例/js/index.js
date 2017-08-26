var resDate=null;

var xhr =new XMLHttpRequest();
xhr.open("get","json/product.json",false)
xhr.onreadystatechange=function () {
    if(xhr.readyState===4 && /^2\d{2}$/.test(xhr.status)){
        resDate=utilis.toJson(xhr.responseText);
        console.log(resDate);
    }
}
xhr.send(null);
console.log(resDate)
var oDiv=document.getElementById("list")
var str="";
var frg=document.createDocumentFragment();
for (var i = 0; i <resDate.length; i++) {
    str+="<dl>"
    str+="<dt>"

    str+="<img src='"+resDate[i].img+"' alt=''>"

    str+="<dd>"+resDate[i].title+"</dd>"
    str+="<dd>"+resDate[i].time+"</dd>"
    str+="<dd>"+resDate[i].hot+"</dd>"
    str+="<dd>"+resDate[i].price+"</dd>"
    str+="</dt>"
    str+="</dl>"


}

console.log(str);
oDiv.innerHTML+=str




