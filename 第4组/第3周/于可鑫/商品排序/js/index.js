var xhr=new XMLHttpRequest();
var resData=null;
xhr.open("get","json/product.json",false);
xhr.onreadystatechange=(function () {
    if(xhr.readyState==4 &&/^2\d{2}$/.test(xhr.status)){
         resData=utils.toJSON(xhr.responseText)
    }

});
xhr.send(null);
var oBot=document.getElementById("bot");
var str="";
for(var i=0;i<resData.length;i++){
    str+="<li data-time='"+resData[i]["time"]+"' data-price='"+resData[i]["price"]+"' data-hot='"+resData[i]["hot"]+"'>";
    str+="<img src='"+resData[i]["img"]+"'>";
    str+="<span>"+resData[i]["title"]+"</span>";
    str+="<span>"+resData[i]["time"]+"</span>";
    str+="<span>"+resData[i]["hot"]+"</span>";
    str+="<span>￥"+resData[i]["price"]+"</span>";
    str+="</li>"
}
oBot.innerHTML=str;

var oTop=document.getElementById("top");
var linkA=oTop.getElementsByTagName("a");
for(var i=0;i<linkA.length;i++){
    linkA[i].index=i;
    linkA[i].flag=-1;
    linkA[i].onclick=function () {
        for (var j=0;j<linkA.length;j++){
            linkA[j]!=this?linkA[j].flag=-1:null;
        }
        this.flag*=-1;
        listSort.call(this)
    }
}

var oBot=document.getElementById("bot");
var oLis=oBot.getElementsByTagName("li");
var ary=utils.listToArray(oLis);
function listSort() {
    var that=this;
    var dataAry=["data-time","data-price","data-hot"];
    ary.sort(function (a,b) {
        var Aa=a.getAttribute(dataAry[that.index]);
        var Bb=b.getAttribute(dataAry[that.index]);
        Aa=Aa.replace(/-/g,"");
        Bb=Bb.replace(/-/g,"");
        return (Aa-Bb)*that.flag;
    })
    var frg=document.createDocumentFragment();
    for(var i=0;i<ary.length;i++){
        frg.appendChild(ary[i]);
    }
    oBot.appendChild(frg);
}
