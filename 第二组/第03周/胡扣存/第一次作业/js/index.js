var obj=null;
var xhr=new XMLHttpRequest();
xhr.open("get","json/json1.json",false);
xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && /^2\d{2}$/.test(xhr.status)){
        obj=utlis.toJson(xhr.responseText);
    }
};
xhr.send(null);

var oUl=document.getElementById("oUl");
var str='';
for (var i = 0; i < obj.length; i++) {
    str+="<li data-time='"+obj[i].time+"' data-hot='"+obj[i].hot+"' data-price='"+obj[i].price+"'>";
    str+="<img src='"+obj[i]["img"]+"'>";
    str+="<span>"+obj[i]["title"]+"</span>";
    str+="<span>"+obj[i]["time"]+"</span>";
    str+="<span>"+obj[i]["hot"]+"</span>";
    str+="<span>"+obj[i]["price"]+"</span>";
}
oUl.innerHTML=str;

var oDiv=document.getElementById("menu");
var oLinkAs=oDiv.getElementsByTagName("a");
for (var i = 0; i < oLinkAs.length; i++) {
    oLinkAs[i].ly=i;
    oLinkAs[i].flag=-1;
    oLinkAs[i].onclick=function(){
        for (var j = 0; j < oLinkAs.length; j++) {
            oLinkAs[j]!==this?oLinkAs[j].flag=-1:null;
        }
        this.flag*=-1;
        listSort.call(this);
    }
}

var oLis=oUl.getElementsByTagName("li");
var ary=utlis.listToArray(oLis);
function listSort(){
    var that=this;
    ary1=["data-time","data-hot","data-price"];
    ary.sort(function(cur ,next){
        cur=cur.getAttribute(ary1[that.ly]);
        next=next.getAttribute(ary1[that.ly]);
        cur=cur.replace(/-/g,"");
       next=next.replace(/-/g,"");
        return (cur - next)*that.flag;
    });
    var frg=document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    oUl.appendChild(frg);
}