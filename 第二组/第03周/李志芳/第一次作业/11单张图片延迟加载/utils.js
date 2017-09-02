//listToArray 类数组转化成数组（兼容所有浏览器）
/*var utils=(function(){
    function listToArray(arg){
        var ary=[];
        try{
            ary=[].slice.call(arg,0);
        }catch(e){
            for(var i=0;i<arg.length;i++){
                ary[i]=arg[i];
            }
        }
        return ary;
    }

    return {
        listToArray:listToArray,

    }
})();*/
var utils={
    listToArray:function listToArray(arg){
        var ary=[];
        try{
            ary=[].slice.call(arg,0);
        }catch(e){
            for(var i=0;i<arg.length;i++){
                ary[i]=arg[i];
            }
        }
        return ary;
    },
    toJSON:function toJSON(objStr){
        return "JSON" in window?JSON.parse(objStr):eval("("+objStr+")");
    },
    offset: function offset(ele) {
        var left = ele.offsetLeft;
        var top = ele.offsetTop;
        var parent = ele.offsetParent;
        while (parent) {
            if (window.navigator.userAgent.indexOf("MSIE 8.0") == -1) {
                left += parent.clientLeft;
                top += parent.clientTop;
            }
            left += parent.offsetLeft;
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {top: top, left: left};
    },
    getCss:function getCss(curEle,attr){
        var val=null;
        var reg=null;
        if("getComputedStyle" in window){
            val=window.getComputedStyle(curEle,null)[attr];
        }else{
            if(attr==="opacity"){
                val=curEle.currentStyle["filter"];
                reg=/^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
                val=reg.test(val)?reg.exec(val)[1]/100:1;
            }else{
                val=curEle.currentStyle[attr];
            }
        }
        reg=/^(-?\d+(\.\d+)?)(px|pt|rem|em)?$/i;
        return reg.test(val)?parseFloat(val):val;
    },
    win:function win(attr,value){
        if(typeof value=="undefined"){
            return document.documentElement[attr]||document.body[attr];
        }else{
            document.documentElement[attr]=value;
            document.body[attr]=value;
        }
    }
};
