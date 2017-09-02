(function () {
    var xhr=new XMLHttpRequest();
    var jsonData=null;
    xhr.open("get","json/product.json",false);
    xhr.onreadystatechange=function () {
        if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
            jsonData=utils.toJSON(xhr.responseText);
        }
    };
    xhr.send(null);
    var str="";
    var oUl=document.getElementById("list");
    for(var i=0;i<jsonData.length;i++){
        str+="<li data-time='"+jsonData[i].time+" '";
        str+="data-hot='"+jsonData[i].hot+" '";
        str+="data-price='"+jsonData[i].price+"'>";
        str+="<img src='"+jsonData[i].img+"'>";
        str+="<span>"+jsonData[i].title+"</span>";
        str+="<span>"+jsonData[i].time+"</span>";
        str+="<span>"+jsonData[i].hot+"</span>";
        str+="<span>$"+jsonData[i].price+"</span>";
        str+="</li>";
    }
    oUl.innerHTML=str;
})();
var oDiv=document.getElementById("menu");
var linkA=oDiv.getElementsByTagName("a");
for(var i=0;i<linkA.length;i++){
    linkA[i].index=i;
    linkA[i].flag=-1;
    linkA[i].onclick=function () {
        for(var j=0;j<linkA.length;j++){
            linkA[j]!==this? linkA[j].flag=-1:null;
        }
        this.flag*=-1;
        linkSort.call(this);
    }
}
var oUl=document.getElementById("list");
var oLis=oUl.getElementsByTagName("li");
var ary=utils.listToArray(oLis);
var artLink=["data-time","data-hot","data-price"];
function linkSort() {
    var that=this;
    ary.sort(function (a, b) {
        a=a.getAttribute(artLink[that.index]);
        b=b.getAttribute(artLink[that.index]);
        a=a.replace(/-/g,"");
        b=b.replace(/-/g,"");
        return (a-b)*that.flag;
    })
    var frg=document.createDocumentFragment();
    for(var i=0;i<ary.length;i++){
        frg.appendChild(ary[i]);
    }
    oUl.appendChild(frg);
}











