//var xmlHttp;
//
//xmlHttp = new XMLHttpRequest();

function init_map() {
    var map = new qq.maps.Map(document.getElementById("main"),{
        center: new qq.maps.LatLng(39.916527,116.397128),
        zoom: 12 
    })
    
};

$(function() {
    init_map();
})

