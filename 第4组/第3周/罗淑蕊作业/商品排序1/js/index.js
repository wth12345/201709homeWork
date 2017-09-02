/**
 * Created by Lenovo on 2017/8/29.
 */

var resData=null;
var xhr=new XMLHttpRequest();
xhr.open("get",'json/product.json',false);
xhr.onreadystatechange=function () {
    if(xhr.readyState===4&&/^2\d{2}/.test(xhr.status)){
        resData=utils.toJson(xhr.responseText)
    }
};
xhr.send(null);

var oUl=document.getElementById("list");
var str='';
for(var i=0;i<resData.length;i++){
    str+='<li data-time="'+resData[i].time+'"data-price="'+resData[i].price+'"data-hot="'+resData[i].hot+'">';
    str+='<img src="'+resData[i].img+'"alt=""/>';
    str+='<span>'+resData[i].title+'</span>';
    str+='<span>'+resData[i].time+'</span>';
    str+='<span>￥'+resData[i].price+'</span>';
    str+='<span>'+resData[i].hot+'</span>';
    str+='</li>'
};
oUl.innerHTML=str;
//绑定点击事件；
var menu=document.getElementById('menu');
var linkA=menu.getElementsByTagName('a');
for(var i=0;i<linkA.length;i++){
    linkA[i].index=i;
    linkA[i].flag=-1;
    linkA[i].onclick=function () {
        for (var j=0;j<linkA.length;j++){
            if(this!==linkA[i]){
                linkA[j].flag=-1
            }
        }
        this.flag*=-1;
        listSort.call(this)
    }
}
var oLis=oUl.getElementsByTagName('li');
var aryLis=utils.listToArray(oLis);
function listSort() {
    var that=this;
    var ary=['data-time','data-price','data-hot'];
    aryLis.sort(function (cur,next) {
        cur=cur.getAttribute(ary[that.index]);
        next=next.getAttribute(ary[that.index]);
        cur=cur.replace(/-/g,'');
        next=next.replace(/-/g,'');
        return(cur-next)*that.flag;
    });
    var frg=document.createDocumentFragment();
    for(var i=0;i<aryLis.length;i++){
        frg.appendChild(aryLis[i]);
    }
    oUl.appendChild(frg)
}