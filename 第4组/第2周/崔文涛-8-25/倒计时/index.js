/**
 * Created by Administrator on 2017/8/25/025.
 */
var oDiv=document.getElementById("div1");
var oSpan=document.getElementById("span1");
function getTime(str){
    var now=new Date();
    var target=new Date("2018/07/12 9:00");
    var spanTime=target.getTime()-now.getTime();
    var hour=Math.floor(spanTime/(60*60*1000));
    spanTime=spanTime-hour*60*60*1000;
    var minute=Math.floor(spanTime/(60*1000));
    spanTime=spanTime-minute*60*1000;
    var second=Math.floor(spanTime/1000);
    var str=zero(hour)+"时"+zero(minute)+"分"+zero(second)+"秒";
    oSpan.innerHTML=str;
    function zero(num){
        return num<10?"0":num;
    }
}
getTime();
oDiv.onclick= function () {
    if (timer) {
        window.clearInterval(timer);
        timer = null;
    } else {
        timer = window.setInterval(getTime, 1000);
    }
};
var timer=window.setInterval(getTime,1000);
