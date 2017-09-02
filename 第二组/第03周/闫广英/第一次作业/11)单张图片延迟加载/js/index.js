var oImg = document.getElementsByTagName("img")[0];
var imgT = utils.offSet(oImg).t + oImg.offsetHeight;
window.onscroll = function () {
    var clientH = utils.win("clientHeight");
    var scrollT = utils.win("scrollTop");
    var winT = clientH + scrollT;
    if (winT >= imgT) {
        if (oImg.loaded) return;
        var tempImg = new Image();
        tempImg.src = oImg.getAttribute("realImg");
        tempImg.onload = function () {
            oImg.src = this.src;
            oImg.loaded = true;
            tempImg = null;
        };
        tempImg.onerror = function () {
            oImg.loaded = true;
            oImg.src = "img/11.png"
        }
    }
};













