var resData = null;
var xhr = new XMLHttpRequest();
xhr.open("get","json/product.json",false);
xhr.onreadystatechange = function(){
    if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
        resData =  utils.toJSON(xhr.responseText)
    }
};
xhr.send(null);

var oUl = document.getElementById("list");
var str = "";
for(var i = 0;i<resData.length;i++){
    str+="<li data-time='"+resData[i].time+"'  data-price='"+resData[i].price+"' data-hot='"+resData[i].hot+"' >";
    str+="<img src='"+resData[i].img+"'/>";
    str+="<span>"+resData[i].title+"</span>";
    str+="<span>"+resData[i].time+"</span>";
    str+="<span>"+resData[i].hot+"</span>";
    str+="<span>￥"+resData[i].price+"</span>";
    str+="</li>";
}
oUl.innerHTML = str;

var menu = document.getElementById("menu");
var linkA = menu.getElementsByTagName("a");
for(var i = 0;i<linkA.length;i++){
    linkA[i].index = i;
    linkA[i].flag = -1;
    linkA[i].onclick = function(){
        this.flag=this.flag*-1;
        listSort.call(this);
    }
}
var oLis = oUl.getElementsByTagName("li");
var ary = utils.listToArray(oLis);
function listSort(){
    var that = this;
    var dataAry = ["data-time","data-price","data-hot"];
    ary.sort(function(cur,next){
        var curItem =  cur.getAttribute(dataAry[that.index]);
        var nextItem = next.getAttribute(dataAry[that.index]);
        curItem = curItem.replace(/-/g,"");
        nextItem = nextItem.replace(/-/g,"");
        return (curItem-nextItem)*that.flag;
    });
    var frg = document.createDocumentFragment();
    for(var i = 0;i<ary.length;i++){
        frg.appendChild(ary[i]);
    }
    oUl.appendChild(frg);
}


