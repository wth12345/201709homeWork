/**
 * Created by Administrator on 2017/8/24 0024.
 */
var oSpan=document.getElementById("span1");
//获取时间并放到页面中
function getTime() {
    var now= new Date();
    var target = new Date("2017/11/30 00:00:00");
    var spanTime=target.getTime()-now.getTime();
    var day=Math.floor(spanTime/(24*60*60*1000));
    spanTime=spanTime-day*24*60*60*1000;
    var hour=Math.floor(spanTime/(60*60*1000));
    spanTime=spanTime-hour*60*60*1000;
    var minute=Math.floor(spanTime/(60*1000));
    spanTime=spanTime-minute*60*1000;
    var second=Math.floor(spanTime/1000);

    var str=zero(day)+"天"+zero(hour)+"时"+zero(minute)+"分"+zero(second)+"秒";
    console.log(str);
    oSpan.innerHTML=str;
}
getTime();
//一位数加零
function zero(num) {
    return num<10?"0"+num:num;
}
//定时器
var timer = window.setInterval(getTime,1000);
//绑定点击事件
var oDiv=document.getElementById("div1");
oDiv.onclick=function (){
    if(timer){
        window.clearInterval(timer);
        timer=null;
    }else {
        timer=window.setInterval(getTime,1000)
    }
};