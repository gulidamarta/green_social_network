ymaps.ready(init);


function init() {
    let myMap;
    myMap = new ymaps.Map("map", {
        center: [53.893009, 27.567444],
        zoom: 11
    });
    myMap.geoObjects
        .add(new ymaps.Placemark([53.883086, 27.447377], {
            balloonContent: 'Green Activity'
        }, {
            preset: 'islands#icon',
            iconColor: '#3c763d'
        }))
        .add(new ymaps.Placemark([53.946016, 27.703441], {
            balloonContent: 'Green Activity 2'
        }, {
            preset: 'islands#icon',
            iconColor: '#3c763d'
        }))
        .add(new ymaps.Placemark([53.858224, 27.485160], {
            balloonContent: 'Green Activity 3'
        }, {
            preset: 'islands#icon',
            iconColor: '#3c763d'
        }))
}