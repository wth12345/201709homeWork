/**
 * Created by Administrator on 2017/9/1/001.
 */
var utils=(function () {
    function listToArray(arg){
        var ary=[];
        try{
            ary=[].slice.call(arg);
        }catch(e){
            for(var i=0;i<arg.length;i++){
                ary[i]=arg[i];
            }
        }
        return ary;
    }
    function toJson(object){
        return "JSON" in window?JSON.parse(object):eval("("+object+")")
    }
    function win(attr,value){
        if(typeof value=="undefined"){
            return document.documentElement[attr]||document.body[attr];
        }else{
            document.documentElement[attr]=value;
            document.body[attr]=value;
        }
    }
    function offSet(ele){
        var l=ele.offsetLeft;
        var t=ele.offsetTop;
        var p=ele.offsetParent;
        while(p!=document.body&&p){
            if(navigator.userAgent.indexOf("MSIE 8.0")==-1){
                l+= p.clientLeft;
                t+= p.clientTop;
            }
            l+= p.offsetLeft;
            t+= p.offsetTop;
            p= p.offsetParent;
        }
        return{
            l:l,t:t
        }
    }
    function getCss(ele,attr){
        var res=null;
        if("getComputedStyle"in window){
            res=window.getComputedStyle(ele,null)[attr];
        }else{
            if(attr=="opacity"){
                res=ele.currentStyle.filter;
                var reg=/^alpha\(opacity\s*=\s*(\d+(?:\.\d+)?)\)$/;
                res=reg.test(res)?RegExp.$1/100:1;
            }else{
                res=ele.currentStyle[attr];
            }
        }
        var reg=/^[+-]?\d+(\d+(?:\.\d+)?)(?:px|rem|em|pt)?$/i;
        return reg.test(res)?parseFloat(res):res;
    }
    return{
        listToArray:listToArray,
        toJson:toJson,
        win:win,
        getCss:getCss,
        offSet:offSet
    }
})();