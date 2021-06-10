ymaps.ready(init);
var myMap;


let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

let chartCarbonDioxide = new CanvasJS.Chart("chartContainerCarbonDioxide", {
    animationEnabled: true,
    title:{
        text: "Carbon Dioxide"
    },
    axisY: {
        //title: "Units Sold",
        //valueFormatString: "#0,,.",
        suffix: "ppm",
        stripLines: [{
            value: 450,
            label: "Upper bound"
        }]
    },
    data: [{
        yValueFormatString: "#,### ppm",
        xValueFormatString: "H:mm:ss",
        type: "spline",
        dataPoints: [
            {x: new Date(2021, 6, 3, 12, 5, 30), y: 430},
            {x: new Date(2021, 6, 3, 12, 10, 30), y: 435},
            {x: new Date(2021, 6, 3, 12, 15, 30), y: 440},
            {x: new Date(2021, 6, 3, 12, 20, 30), y: 423},
            {x: new Date(2021, 6, 3, 12, 25, 30), y: 425},
            {x: new Date(2021, 6, 3, 12, 30, 30), y: 427},
            {x: new Date(2021, 6, 3, 12, 35, 30), y: 430},
            {x: new Date(2021, 6, 3, 12, 40, 30), y: 430},
            {x: new Date(2021, 6, 3, 12, 45, 30), y: 428},
            {x: new Date(2021, 6, 3, 12, 50, 30), y: 428},
            {x: new Date(2021, 6, 3, 12, 55, 30), y: 436},
            {x: new Date(2021, 6, 3, 13, 0, 30), y: 441},
            {x: new Date(2021, 6, 3, 13, 5, 30), y: 443},
            {x: new Date(2021, 6, 3, 13, 10, 30), y: 445},
            {x: new Date(2021, 6, 3, 13, 15, 30), y: 443},
            {x: new Date(2021, 6, 3, 13, 20, 30), y: 446}
        ]
    }]
});

let chartContainerTvoc = new CanvasJS.Chart("chartContainerTvoc", {
    animationEnabled: true,
    title:{
        text: "Tvoc"
    },
    axisY: {
        //title: "Units Sold",
        valueFormatString: "#,0.####",
        // need value in ppm
        suffix: "mg/m3",
        stripLines: [{
            value: 0.601,
            label: "Upper bound"
        }]
    },
    data: [{
        yValueFormatString: "#,#0.#### mg/m3",
        xValueFormatString: "H:mm:ss",
        type: "spline",
        dataPoints: [
            {x: new Date(2021, 6, 3, 12, 5, 30), y: 0.201},
            {x: new Date(2021, 6, 3, 12, 10, 30), y: 0.205},
            {x: new Date(2021, 6, 3, 12, 15, 30), y: 0.203},
            {x: new Date(2021, 6, 3, 12, 20, 30), y: 0.234},
            {x: new Date(2021, 6, 3, 12, 25, 30), y: 0.346},
            {x: new Date(2021, 6, 3, 12, 30, 30), y: 0.378},
            {x: new Date(2021, 6, 3, 12, 35, 30), y: 0.345},
            {x: new Date(2021, 6, 3, 12, 40, 30), y: 0.321},
            {x: new Date(2021, 6, 3, 12, 45, 30), y: 0.318},
            {x: new Date(2021, 6, 3, 12, 50, 30), y: 0.389},
            {x: new Date(2021, 6, 3, 12, 55, 30), y: 0.401},
            {x: new Date(2021, 6, 3, 13, 0, 30), y: 0.420},
            {x: new Date(2021, 6, 3, 13, 5, 30), y: 0.433},
            {x: new Date(2021, 6, 3, 13, 10, 30), y: 0.456},
            {x: new Date(2021, 6, 3, 13, 15, 30), y: 0.459},
            {x: new Date(2021, 6, 3, 13, 20, 30), y: 0.430}
        ]
    }]
});

let chartFormaldehyde = new CanvasJS.Chart("chartContainerFormaldehyde", {
    animationEnabled: true,
    title:{
        text: "Formaldehyde"
    },
    axisY: {
        //title: "Units Sold",
        valueFormatString: "#,0.####",
        // ppm
        suffix: "mg/m3",
        stripLines: [{
            value: 0.301,
            label: "Upper bound"
        }]
    },
    data: [{
        yValueFormatString: "#,#0.#### mg/m3",
        xValueFormatString: "H:mm:ss",
        type: "spline",
        dataPoints: [
            {x: new Date(2021, 6, 3, 12, 5, 30), y: 0.098},
            {x: new Date(2021, 6, 3, 12, 10, 30), y: 0.088},
            {x: new Date(2021, 6, 3, 12, 15, 30), y: 0.123},
            {x: new Date(2021, 6, 3, 12, 20, 30), y: 0.119},
            {x: new Date(2021, 6, 3, 12, 25, 30), y: 0.129},
            {x: new Date(2021, 6, 3, 12, 30, 30), y: 0.136},
            {x: new Date(2021, 6, 3, 12, 35, 30), y: 0.145},
            {x: new Date(2021, 6, 3, 12, 40, 30), y: 0.149},
            {x: new Date(2021, 6, 3, 12, 45, 30), y: 0.134},
            {x: new Date(2021, 6, 3, 12, 50, 30), y: 0.131},
            {x: new Date(2021, 6, 3, 12, 55, 30), y: 0.125},
            {x: new Date(2021, 6, 3, 13, 0, 30), y: 0.108},
            {x: new Date(2021, 6, 3, 13, 5, 30), y: 0.098},
            {x: new Date(2021, 6, 3, 13, 10, 30), y: 0.071},
            {x: new Date(2021, 6, 3, 13, 15, 30), y: 0.089},
            {x: new Date(2021, 6, 3, 13, 20, 30), y: 0.074}
        ]
    }]
});

let chartToluene = new CanvasJS.Chart("chartContainerToluene", {
    animationEnabled: true,
    title:{
        text: "Toluene"
    },
    axisY: {
        valueFormatString: "#,0.####",
        suffix: "",
        stripLines: [{
            value: 1,
            label: "Detected"
        }]
    },
    data: [{
        yValueFormatString: "#,###",
        xValueFormatString: "H:mm:ss",
        type: "spline",
        dataPoints: [
            {x: new Date(2021, 6, 3, 12, 5, 30), y: 0},
            {x: new Date(2021, 6, 3, 12, 10, 30), y: 1},
            {x: new Date(2021, 6, 3, 12, 15, 30), y: 0},
            {x: new Date(2021, 6, 3, 12, 20, 30), y: 0},
            {x: new Date(2021, 6, 3, 12, 25, 30), y: 0},
            {x: new Date(2021, 6, 3, 12, 30, 30), y: 0},
            {x: new Date(2021, 6, 3, 12, 35, 30), y: 1},
            {x: new Date(2021, 6, 3, 12, 40, 30), y: 0},
            {x: new Date(2021, 6, 3, 12, 45, 30), y: 0},
            {x: new Date(2021, 6, 3, 12, 50, 30), y: 0},
            {x: new Date(2021, 6, 3, 12, 55, 30), y: 0},
            {x: new Date(2021, 6, 3, 13, 0, 30), y: 1},
            {x: new Date(2021, 6, 3, 13, 5, 30), y: 1},
            {x: new Date(2021, 6, 3, 13, 10, 30), y: 0},
            {x: new Date(2021, 6, 3, 13, 15, 30), y: 0},
            {x: new Date(2021, 6, 3, 13, 20, 30), y: 0}
        ]
    }]
});

let chartRadiation = new CanvasJS.Chart("chartContainerRadiation", {
    animationEnabled: true,
    title:{
        text: "Radiation"
    },
    axisY: {
        title: "Microroentgen per hour",
        valueFormatString: "#,0.####",
        suffix: "mp/h",
        stripLines: [{
            value: 25,
            label: "Upper bound"
        }]
    },
    data: [{
        yValueFormatString: "#,#0.#### mp/h",
        xValueFormatString: "H:mm:ss",
        type: "spline",
        dataPoints: [
            {x: new Date(2021, 6, 3, 12, 5, 30), y: 2.03},
            {x: new Date(2021, 6, 3, 12, 10, 30), y: 3.12},
            {x: new Date(2021, 6, 3, 12, 15, 30), y: 2.45},
            {x: new Date(2021, 6, 3, 12, 20, 30), y: 4.01},
            {x: new Date(2021, 6, 3, 12, 25, 30), y: 2.98},
            {x: new Date(2021, 6, 3, 12, 30, 30), y: 3.1},
            {x: new Date(2021, 6, 3, 12, 35, 30), y: 3.01},
            {x: new Date(2021, 6, 3, 12, 40, 30), y: 2.9},
            {x: new Date(2021, 6, 3, 12, 45, 30), y: 2.94},
            {x: new Date(2021, 6, 3, 12, 50, 30), y: 2.12},
            {x: new Date(2021, 6, 3, 12, 55, 30), y: 1.89},
            {x: new Date(2021, 6, 3, 13, 0, 30), y: 1.98},
            {x: new Date(2021, 6, 3, 13, 5, 30), y: 2.01},
            {x: new Date(2021, 6, 3, 13, 10, 30), y: 2.23},
            {x: new Date(2021, 6, 3, 13, 15, 30), y: 2.45},
            {x: new Date(2021, 6, 3, 13, 20, 30), y: 1.98}
        ]
    }]
});


function createCircle(coordinates, radius){
    myCircle = new ymaps.Circle([
        // Координаты центра круга.
        coordinates,
        // Радиус круга в метрах.
        radius
    ], {
        // Содержимое балуна.
        balloonContent: "Радиус круга - 10 км",
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: true,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#DB709377",
        // Цвет обводки.
        strokeColor: "#990066",
        strokeOpacity: 0.1,
        strokeWidth: 1
    });

    return myCircle;
}

function createPlacemark(coordinates, activityName, activityDescription){
    myPlacemark = new ymaps.Placemark(coordinates, {
        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
        balloonContentHeader: activityName,
        balloonContentBody: activityDescription,
    },{
        preset: 'islands#redFactoryIcon'
    });

    return myPlacemark;
}

function init () {
    chartCarbonDioxide.render();
    myMap = new ymaps.Map('map', {
        center: [53.9040, 27.5590],
        zoom: 16.5,
    }, {
        searchControlProvider: 'yandex#search'
    });

    // Uncomment to use Heatmap
    // ymaps.modules.require(['Heatmap'], function (Heatmap) {
    //     var data = [[53.9006, 27.5590], [53.92, 27.59]],
    //         heatmap = new Heatmap(data);
    //     heatmap.radius = 1000;
    //     heatmap.setMap(myMap);
    // });


    fetch('/activities/devices')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let myPlacemark = createPlacemark(
                [53.9040, 27.5590],
                data.activities_list[0].activity.name,
                data.activities_list[0].activity.description,
            );
            // Creating a circle.
            let myCircle = createCircle( [53.9040, 27.5590], 100);
            myMap.geoObjects.add(myPlacemark);
            myMap.geoObjects.add(myCircle);

            myPlacemark = createPlacemark(
                [53.9056, 27.57],
                data.activities_list[1].activity.name,
                data.activities_list[1].activity.description,
            );
            // Creating a circle.
            myCircle = createCircle( [53.9056, 27.57], 100);
            myMap.geoObjects.add(myPlacemark);
            myMap.geoObjects.add(myCircle);
        });

    // myMap.geoObjects
    //     .add(createPlacemark(
    //         [53.9056, 27.57],
    //         'Plant a tree',
    //         'Plant a tree in a forest')
    //     );
    // myMap.geoObjects.add(createCircle( [53.9056, 27.57], 100));
    //
    // myMap.geoObjects
    //     .add(new ymaps.Placemark([53.9000, 27.57], {
    //         balloonContent: 'Donate clothes'
    //     }, {
    //         preset: 'islands#redFactoryIcon'
    //     }))

    myMap.events.add('balloonopen', function (event) {
        modal.style.display = "block";

        chartContainerTvoc.render();
        chartFormaldehyde.render();
        chartToluene.render();
        chartRadiation.render();
        chartCarbonDioxide.render();
    });
}

function openChart(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.zIndex = "1";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.zIndex = "100";
    evt.currentTarget.className += " active";
}
