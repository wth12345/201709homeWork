var resData=null;
var xhr=new XMLHttpRequest();
xhr.open("get","json/product.json",false);
xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
        resData=utils.toJSON(xhr.responseText);
    }
};
xhr.send(null);
console.log(resData);
var str="";
for(var i=0;i<resData.length;i++){
    str+="<li data-date='"+resData[i].date+"' data-hot='"+resData[i].hot+"' data-price='"+resData[i].price+"'>";
    str+="<img src='"+resData[i].img+"'>";
    str+="<span>"+resData[i].title+"</span>";
    str+="<span>"+resData[i].date+"</span>";
    str+="<span>"+resData[i].hot+"</span>";
    str+="<span>$"+resData[i].price+"</span>";
    str+="</li>";
}
var oUl=document.getElementById("ul1");
oUl.innerHTML=str;

var menu=document.getElementById("link");
var linkA=menu.getElementsByTagName("a");
for(var i=0;i<linkA.length;i++){
    linkA[i].index=i;
    linkA[i].flag=-1;
    linkA[i].onclick=function(){
        this.flag*=-1;
        for(var j=0;j<linkA.length;j++){
             linkA[j]!=this?linkA[j].flag=-1:null;
        }
        listSort.call(this);
    }
}

var oLis=oUl.getElementsByTagName("li");
var ary=utils.listToArray(oLis);
console.log(ary);
var res=["data-date","data-price","data-hot"];
function listSort(){
    var that=this;
    ary.sort(function(cur,next){
        cur=cur.getAttribute(res[that.index]);
        next=next.getAttribute(res[that.index]);
        cur=cur.replace(/-/g,"");
        next=next.replace(/-/g,"");
        return (cur-next)*that.flag;
    });
    var frg=document.createDocumentFragment();
    for(var i=0;i<ary.length;i++){
        frg.appendChild(ary[i]);
    }
    oUl.appendChild(frg);
}
