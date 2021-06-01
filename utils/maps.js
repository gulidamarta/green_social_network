let mongoose = require('mongoose');

// Activity schema
let activitiesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category:{
        type: String,
        required: true
    },
    activityPlace_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    activitySchedule_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }
});

let Activities = mongoose.model('Activities', activitiesSchema);
// ActivityPlace schema
let ActivityPlaceSchema = mongoose.Schema({
    latitude: {
        type:  mongoose.Schema.Types.Decimal,
        required: true
    },
    longitude: {
        type: mongoose.Schema.Types.Decimal,
        required: true
    }
});

let ActivityPlace = mongoose.model('ActivityPlace', ActivityPlaceSchema);

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

    // myMap.geoObjects
    //     .add(myRectangle);

    // Uncomment to use Heatmap
    // ymaps.modules.require(['Heatmap'], function (Heatmap) {
    //     var data = [[53.9006, 27.5590], [53.92, 27.59]],
    //         heatmap = new Heatmap(data);
    //     heatmap.radius = 1000;
    //     heatmap.setMap(myMap);
    // });
    locals.Activities.find({}, function(err, activities_list){
        if (err){
            console.log(err);
        }else{
            for(let i=0; i<activities_list.length; i++){
                locals.ActivityPlace.findById(activities_list[i].activityPlace_id, function (err, activity_place){
                    if (err){
                        console.log(activity_place);
                    } else {
                        myMap.geoObjects
                            .add(new ymaps.Placemark([activity_place.latitude, activity_place.longitude], {
                                balloonContent: '<strong>red</strong> color'
                            }, {
                                preset: 'islands#redFactoryIcon'
                            }))
                    }
                })
            }
        }
    });
    myMap.geoObjects
        .add(new ymaps.Placemark([53.9040, 27.5590], {
            balloonContent: '<strong>red</strong> color'
        }, {
            preset: 'islands#redFactoryIcon'
        }))

    myMap.geoObjects
        .add(new ymaps.Placemark([53.9056, 27.57], {
            balloonContent: '<strong>red</strong> color'
        }, {
            preset: 'islands#redFactoryIcon'
        }))

    myMap.geoObjects
        .add(new ymaps.Placemark([53.9000, 27.57], {
            balloonContent: '<strong>red</strong> color'
        }, {
            preset: 'islands#redFactoryIcon'
        }))
}
