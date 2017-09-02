var aryJSON = [];
var xhr = new XMLHttpRequest();
xhr.open("get", "json/data.json", false);

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
        console.log(xhr.responseText);
        aryJSON = utils.toJSON(xhr.responseText);
    }
};
xhr.send(null);

console.log(aryJSON);
var oBody = document.getElementsByClassName("body")[0];
var str = "";
for(var i = 0;i < aryJSON.length;i ++){
    str += "<div class='"+"shop'>";
    str += "<div><img src='"+"img/3.jpg'></div>";
    str += "<p>"+aryJSON[i]["title"]+"</p>";
    str += "<p>"+aryJSON[i]["time"]+"</p>";
    str += "<p>"+aryJSON[i]["hot"]+"</p>";
    str += "<p>"+aryJSON[i]["price"]+"</p>";
    str += "</div>";
}

oBody.innerHTML = str;