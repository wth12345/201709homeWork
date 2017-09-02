
var utils=(function () {
    /**
     * 作用：
     * 1.处理透明度不兼容的问题（针对IE浏览器）
     * 2.获取CSS样式+去单位转化为数值
     * @param ele
     * @param attr
     * @returns {*}
     */
    function getCss(ele, attr) {
        var res = null;
        if ("getComputedStyle"in window) {
            res = window.getComputedStyle(ele, null)[attr];
        } else {
            if (attr == "opacity") {
                /*获取的是filter属性的值*/
                res = ele.currentStyle.filter;
                var reg = /^alpha\(opacity\s* =\s*(\d+(?:\.\d+)?)\)$/;
                /*若匹配则把有效数不分取出来并处以100转换为0-1小数*/
                /*反则返回1*/
                /*test,exec 运行之后能直接通过RegExp.$1获取分组里的内容*/
                res= reg.test(res) ? RegExp.$1/100 : 1;
            } else {
                res = ele.currentStyle[attr]
            }
        }
        var reg = /^[+-]?\d+(\d+(?:\.\d+)?)(?:px|pt|rem|em)?$/i;
        return reg.test(res) ? parseFloat(res) : res;

    }
    /**
     * 到body的距离(上偏移和左偏移)
     * @param ele
     * @returns {{l: (Number|number), t: (Number|number)}}
     */
    function offset(ele){
        var l=ele.offsetLeft;
        var t=ele.offsetTop;
        var p=ele.offsetParent;
        while(p!=document.body&&p){//1.ele不是body2.不能是body
            /*p标签到他的参照物的偏移*/
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
    /**
     *类数组转换为数组
     * @param arg
     * @returns {Array}
     */
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

    /**
     * JSON格式字符传转换为对象
     * @param object
     * @returns {Object}
     */
    function toJSON(object){
        return  "JSON" in window?JSON.parse(object):eval("("+object+")");
    }

    /**
     * 获取或者设置关于浏览器的盒子模型的信息
     * @param attr
     * @param value
     * @returns {*}
     */
    function win(attr,value){
        //不传value的话默认是获取样式的值
        if(typeof value=="undefined"){
            return document.documentElement[attr]||document.body[attr];
        }else{
            document.documentElement[attr]=value;
            document.body[attr]=value;
        }
    }
    return{
        listToArray:listToArray,
        toJSON:toJSON,
        getCss:getCss,
        offset:offset,
        win:win
    }
})();