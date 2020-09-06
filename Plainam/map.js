// Load Map
const mymap = L.map('mapid').setView([18.787007, 98.984952], 7.2);
let ok = 1;
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid29yYXdhdHRyaSIsImEiOiJja2JnMHdqa3oxMHR0MzBubzd4MW54aW00In0.xpv91a9YP7GRa4BtJWts_A'
}).addTo(mymap);


// Load Polygon
$.getJSON("https://raw.githubusercontent.com/WorawatPP/todolist/master/plainam2", function (data) {
    ok = L.geoJSON(data, {
        onEachFeature: function (feature, layer) {
            layer.on('mouseover', function () {
                this.setStyle({
                    'fillColor': '#fffff'
                });
                this.bindTooltip('<h2>' + feature.properties.name + '</h2>')
            });
            layer.on('mouseout', function () {
                this.setStyle({
                    'fillColor': ''
                });
            });
            layer.on({ click: whenClick });
        }
    }).addTo(mymap);
});

function whenClick(f) {
    console.log(f.target.feature.properties.name);

    const result = marker.filter((e) => {
        return e.name == f.target.feature.properties.name
    })

    console.log(result)
    province(result[0]['param'])
}

const marker = [{
    name: "ChiangMai",
    param: "50",
    lat: 18.787007,
    long: 98.984952,
    zoom: 9
},
{
    name: "Lamphun",
    param: "51",
    lat: 18.573955,
    long: 99.007959
},
{
    name: "Lampang",
    param: "52",
    lat: 18.276409,
    long: 99.479696
},
{
    name: "Phrae",
    param: "54",
    lat: 18.142647,
    long: 100.139286
},
{
    name: "Nan",
    param: "55",
    lat: 18.772201,
    long: 100.771887
},
{
    name: "Phayao",
    param: "56",
    lat: 19.214730,
    long: 100.212166
},
{
    name: "ChiangRai",
    param: "57",
    lat: 19.896964,
    long: 99.811122
},
{
    name: "MaeHongSon",
    param: "58",
    lat: 19.306468,
    long: 98.012313
}
]

function province(id) {
    console.log(id);
    const result = marker.filter((e) => {
        return e.param == id
    })
    console.log(result[0]["param"])
    if (ok != 1) {
        ok.clearLayers();
    }
    $.getJSON("https://raw.githubusercontent.com/WorawatPP/todolist/master/plainam_marker", function (data) {
        mymap.setView([result[0]['lat'], result[0]['long']], 9);
        ok = L.geoJSON(data, {
            onEachFeature: function () { }
        }).addTo(mymap);
    });
}


mymap.on('zoomend', function () {
    console.log(mymap.getZoom())
    if (mymap.getZoom() < 9) {
        if (ok != 1) {
            ok.clearLayers();
        }
        $.getJSON("https://raw.githubusercontent.com/WorawatPP/todolist/master/plainam2", function (data) {
            ok = L.geoJSON(data, {
                onEachFeature: function (feature, layer) {
                    layer.on('mouseover', function () {
                        this.setStyle({
                            'fillColor': '#fffff'
                        });
                        this.bindTooltip('<h2>' + feature.properties.name + '</h2>')
                    });
                    layer.on('mouseout', function () {
                        this.setStyle({
                            'fillColor': ''
                        });
                    });
                    layer.on({ click: whenClick });
                }
            }).addTo(mymap);
        });
    }
});