ymaps.ready(init);


function init() {
    let myMap;
    myMap = new ymaps.Map("map", {
        center: [53.893009, 27.567444],
        zoom: 11
    });
    let Activities = require('../models/activities');
    Activities.find(function (activities, err) {
        if (err){
            console.log('Something went wrong, when showing activities.')
        }
        else {
            for (let activity in activities) {
                myMap.geoObjects
                    .add(new ymaps.Placemark([53.883086, 27.447377], {
                        balloonContent: activity.name
                    }, {
                        preset: 'islands#icon',
                        iconColor: '#3c763d'
                    }))
            }
        }
    });
}