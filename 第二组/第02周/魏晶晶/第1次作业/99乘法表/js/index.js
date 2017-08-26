var resDate=null;
var xhr= new XMLHttpRequest();
xhr.open("get","data.json",false);
xhr.onreadystatechange=function () {
    if(xhr.readyState===4 && /^2\d{2}$/.test(xhr.status)){
        resDate=utilis.toJson(xhr.responseText);
        console.log(resDate);
    }
}
xhr.send(null);

var oUl=document.getElementById("list");
var str=""
// for (var i = 0; i < resDate.length; i++) {
//     str+="<li>";
//     for (var j = 0; j <= i;j++ ) {
//
//         // str+="<span>" + resDate[i].content[j]+"="+resDate[i].content[j][0]*resDate[i].content[j][2]+"</span>"
//         str+="<span>" + resDate[i].content[j]+"="+(i+1)*(j+1)+"</span>"
//
//
//     }
//     str+="</li>";



// }
for (var i = 1; i < 10; i++) {
    str+="<li>";
    for (var j = 1; j <= i;j++ ) {

        str+="<span>" + i+'X'+j+'='+i*j+"</span>"


    }
    str+="</li>";



}
console.log(str);
oUl.innerHTML=str;