ymaps.ready(init);

function init() {
    const latitude_Minsk = 53.893009;
    const longitude_Minsk = 27.567444;

    let myPlacemark,
        myMap = new ymaps.Map('map', {
            center: [latitude_Minsk, longitude_Minsk],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        });


    // Hear click on the map
    myMap.events.add('click', function (e) {
        let coords = e.get('coords');

        // If placemark is created - move it
        if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
            let latitude = document.getElementById('latitude');
            let longitude = document.getElementById('longitude');
            latitude.value = coords[0];
            longitude.value = coords[1];
        }
        // If not created - create
        else {
            myPlacemark = createPlacemark(coords);
            myMap.geoObjects.add(myPlacemark);

            // Hear ending of dragging event on placemark.
            myPlacemark.events.add('dragend', function () {
                getAddress(myPlacemark.geometry.getCoordinates());
            });
        }
        getAddress(coords);
    });

    // Creation of the placemark
    function createPlacemark(coords) {
        return new ymaps.Placemark(coords, {
            iconCaption: 'search...'
        }, {
            preset: 'islands#violetDotIconWithCaption',
            iconColor: '#3c763d',
            draggable: true
        });
    }

    // Define address according coordinates (reverse geocoding).
    function getAddress(coords) {
        myPlacemark.properties.set('iconCaption', 'search...');
        ymaps.geocode(coords).then(function (res) {
            let firstGeoObject = res.geoObjects.get(0);

            myPlacemark.properties
                .set({
                    // Form a string with data about object.
                    iconCaption: [
                        // Название населенного пункта или вышестоящее административно-территориальное образование.
                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                        // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                    ].filter(Boolean).join(', '),
                    // В качестве контента балуна задаем строку с адресом объекта.
                    balloonContent: firstGeoObject.getAddressLine()
                });
        });
    }
    //
    // myMap.geoObjects
    //     .add(new ymaps.Placemark([53.883086, 27.447377], {
    //         balloonContent: 'Green Activity'
    //     }, {
    //         preset: 'islands#icon',
    //         iconColor: '#3c763d'
    //     }))
    //     .add(new ymaps.Placemark([53.946016, 27.703441], {
    //         balloonContent: 'Green Activity 2'
    //     }, {
    //         preset: 'islands#icon',
    //         iconColor: '#3c763d'
    //     }))
    //     .add(new ymaps.Placemark([53.858224, 27.485160], {
    //         balloonContent: 'Green Activity 3'
    //     }, {
    //         preset: 'islands#icon',
    //         iconColor: '#3c763d'
    //     }))
}

module.exports = init;