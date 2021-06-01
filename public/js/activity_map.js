ymaps.ready(init);
var myMap;

function init () {
    myMap = new ymaps.Map('map', {
        center: [53.9006, 27.5590],
        zoom: 15
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
        strokeColor: 'rgba(77,140,141,0.2)',
        strokeWidth: 2,
        borderRadius: 90
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([53.9000, 27.57], {
            balloonContent: '<strong>red</strong> color'
        }, {
            preset: 'islands#redFactoryIcon'
        }))
}
