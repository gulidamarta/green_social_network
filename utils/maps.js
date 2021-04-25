ymaps.ready(init);
var myMap;

function init () {
    myMap = new ymaps.Map('map', {
        center: [53.9006, 27.5590],
        zoom: 13
    }, {
        searchControlProvider: 'yandex#search'
    });

    // Creating a rectangle using an auxiliary class.
    myRectangle = new ymaps.Rectangle([
        // Setting the coordinates of the diagonal corners of the rectangle.
        [53.9006, 27.5590],
        [53.92, 27.59],
    ], {
        //Properties
        balloonContent: 'Activity'
    }, {
        fillColor: 'rgba(77,140,141,0.2)',
        //fillOpacity: 0.5,
        strokeColor: 'rgba(77,140,141,0.2)',
        //strokeOpacity: 0.5,
        strokeWidth: 2,
        borderRadius: 90
    });

    // myMap.geoObjects
    //     .add(myRectangle);

    ymaps.modules.require(['Heatmap'], function (Heatmap) {
        var data = [[53.9006, 27.5590], [53.92, 27.59]],
            heatmap = new Heatmap(data);
        heatmap.radius = 1000;
        heatmap.setMap(myMap);
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([53.9040, 27.5590], {
            balloonContent: '<strong>red</strong> color'
        }, {
            preset: 'islands#redSportIcon'
        }))
}
