var resObj=null;
var xhr=new XMLHttpRequest();
xhr.open("get","json/data.json",false);
xhr.onreadystatechange=function () {
    if(xhr.readyState==4 && /^2\d{2}$/.test(xhr.status)){
        resObj=utilis.toJson(xhr.responseText)
    }
};
xhr.send(null);

var oUl=document.getElementById("list");
var str="";
for (var i = 0; i < resObj.length; i++) {
   str+="<li data-time='"+resObj[i].time+"' data-hot='"+resObj[i].hot+"' data-price='"+resObj[i].price+"'>"
    str+="<img src='"+resObj[i].img+"' alt=''>"
    str+="<span>"+resObj[i].title+"</span>"
    str+="<span>"+resObj[i].time+"</span>"
    str+="<span>"+resObj[i].hot+"</span>"
    str+="<span>￥"+resObj[i].price+"</span>"
    str+="</li>";
}
oUl.innerHTML=str;
var menu=document.getElementById("menu");
var likeA=menu.getElementsByTagName("a");
for (var i = 0; i <likeA.length; i++) {
    likeA[i].m=i;
    likeA[i].flag=-1;
    likeA[i].onclick=function () {
        for (var j = 0; j <likeA.length; j++) {
            if(likeA[j]!=this){
                likeA[j].flag=-1;
            }

        }

        this.flag*=-1
        listSort.call(this)
    }

}

var oLis=oUl.getElementsByTagName("li");
var ary=utilis.toArray(oLis);
var dataArray=["data-time","data-hot","data-price"]
function listSort() {
    var taht=this;
    ary.sort(function (cur,next) {
        cur=cur.getAttribute(dataArray[taht.m]);
        next=next.getAttribute(dataArray[taht.m]);
        cur=cur.replace(/-/g,"");
        next=next.replace(/-/g,"");
        return (cur-next)*taht.flag


    })
    var frg=document.createDocumentFragment()
    for (var i = 0; i <ary.length; i++) {
       frg.appendChild(ary[i]);

    }
    oUl.appendChild(frg);

}