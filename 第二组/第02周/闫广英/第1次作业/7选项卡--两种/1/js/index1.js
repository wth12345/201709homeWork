/**
 * Created by Administrator on 2017/8/25 0025.
 */
function tabChange(choise) {
    this.id = choise.id;
    this.select = choise.select || 0;
    this.init();
}
tabChange.prototype.init = function () {
    this.getEle();
    this.bind();
    this.changeTab(this.select);
};
tabChange.prototype.getEle = function () {
    var oTab=document.getElementById("tab");
    this.oLis=oTab.getElementsByTagName("li");
    this.oDivs=oTab.getElementsByTagName("div");
};
tabChange.prototype.changeTab = function () {
    for(var i=0;i<oLis.length;i++){
        this.oLis[i].className="";
        this.oDivs[i].className="";
    }
    this.oLis[i].className="select";
    this.oDivs[i].className="select";
};
tabChange.prototype.bind = function (n) {
    for (var i=0;i<oLis.length;i++){
        this.oLis[i].onclick=(function (i) {
            return function () {
                this.tabChange();
            }
        })(i)
    }

};