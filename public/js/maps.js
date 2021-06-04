ymaps.ready(init);
var myMap;

// Get the modal
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
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
        valueFormatString: "#0,,.",
        suffix: "mn",
        stripLines: [{
            value: 3366500,
            label: "Average"
        }]
    },
    data: [{
        yValueFormatString: "#,###",
        xValueFormatString: "HH:MM:SS",
        type: "spline",
        dataPoints: [
            {x: new Date(2021, 6, 3, 12, 5, 30), y: 2506000},
            {x: new Date(2021, 6, 3, 12, 10, 30), y: 2798000},
            {x: new Date(2021, 6, 3, 12, 15, 30), y: 3386000},
            {x: new Date(2021, 6, 3, 12, 20, 30), y: 6944000},
            {x: new Date(2021, 6, 3, 12, 25, 30), y: 6026000},
            {x: new Date(2021, 6, 3, 12, 30, 30), y: 2394000},
            {x: new Date(2021, 6, 3, 12, 35, 30), y: 1872000},
            {x: new Date(2021, 6, 3, 12, 40, 30), y: 2140000},
            {x: new Date(2021, 6, 3, 12, 45, 30), y: 7289000},
            {x: new Date(2021, 6, 3, 12, 50, 30), y: 4830000},
            {x: new Date(2021, 6, 3, 12, 55, 30), y: 2009000},
            {x: new Date(2021, 6, 3, 13, 0, 30), y: 2840000},
            {x: new Date(2021, 6, 3, 13, 5, 30), y: 2396000},
            {x: new Date(2021, 6, 3, 13, 10, 30), y: 1613000},
            {x: new Date(2021, 6, 3, 13, 15, 30), y: 2821000},
            {x: new Date(2021, 6, 3, 13, 20, 30), y: 2000000}
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
        valueFormatString: "#0,,.",
        suffix: "mn",
        stripLines: [{
            value: 3366500,
            label: "Average"
        }]
    },
    data: [{
        yValueFormatString: "#,###",
        xValueFormatString: "HH:MM:SS",
        type: "spline",
        dataPoints: [
            {x: new Date(2021, 6, 3, 12, 5, 30), y: 2506000},
            {x: new Date(2021, 6, 3, 12, 10, 30), y: 2798000},
            {x: new Date(2021, 6, 3, 12, 15, 30), y: 3386000},
            {x: new Date(2021, 6, 3, 12, 20, 30), y: 6944000},
            {x: new Date(2021, 6, 3, 12, 25, 30), y: 6026000},
            {x: new Date(2021, 6, 3, 12, 30, 30), y: 2394000},
            {x: new Date(2021, 6, 3, 12, 35, 30), y: 1872000},
            {x: new Date(2021, 6, 3, 12, 40, 30), y: 2140000},
            {x: new Date(2021, 6, 3, 12, 45, 30), y: 7289000},
            {x: new Date(2021, 6, 3, 12, 50, 30), y: 4830000},
            {x: new Date(2021, 6, 3, 12, 55, 30), y: 2009000},
            {x: new Date(2021, 6, 3, 13, 0, 30), y: 2840000},
            {x: new Date(2021, 6, 3, 13, 5, 30), y: 2396000},
            {x: new Date(2021, 6, 3, 13, 10, 30), y: 1613000},
            {x: new Date(2021, 6, 3, 13, 15, 30), y: 2821000},
            {x: new Date(2021, 6, 3, 13, 20, 30), y: 2000000}
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
        valueFormatString: "#0,,.",
        suffix: "mn",
        stripLines: [{
            value: 3366500,
            label: "Average"
        }]
    },
    data: [{
        yValueFormatString: "#,###",
        xValueFormatString: "HH:MM:SS",
        type: "spline",
        dataPoints: [
            {x: new Date(2021, 6, 3, 12, 5, 30), y: 2506000},
            {x: new Date(2021, 6, 3, 12, 10, 30), y: 2798000},
            {x: new Date(2021, 6, 3, 12, 15, 30), y: 3386000},
            {x: new Date(2021, 6, 3, 12, 20, 30), y: 6944000},
            {x: new Date(2021, 6, 3, 12, 25, 30), y: 6026000},
            {x: new Date(2021, 6, 3, 12, 30, 30), y: 2394000},
            {x: new Date(2021, 6, 3, 12, 35, 30), y: 1872000},
            {x: new Date(2021, 6, 3, 12, 40, 30), y: 2140000},
            {x: new Date(2021, 6, 3, 12, 45, 30), y: 7289000},
            {x: new Date(2021, 6, 3, 12, 50, 30), y: 4830000},
            {x: new Date(2021, 6, 3, 12, 55, 30), y: 2009000},
            {x: new Date(2021, 6, 3, 13, 0, 30), y: 2840000},
            {x: new Date(2021, 6, 3, 13, 5, 30), y: 2396000},
            {x: new Date(2021, 6, 3, 13, 10, 30), y: 1613000},
            {x: new Date(2021, 6, 3, 13, 15, 30), y: 2821000},
            {x: new Date(2021, 6, 3, 13, 20, 30), y: 2000000}
        ]
    }]
});

let chartToluence = new CanvasJS.Chart("chartContainerToluence", {
    animationEnabled: true,
    title:{
        text: "Toluence"
    },
    axisY: {
        //title: "Units Sold",
        valueFormatString: "#0,,.",
        suffix: "mn",
        stripLines: [{
            value: 3366500,
            label: "Average"
        }]
    },
    data: [{
        yValueFormatString: "#,###",
        xValueFormatString: "HH:MM:SS",
        type: "spline",
        dataPoints: [
            {x: new Date(2021, 6, 3, 12, 5, 30), y: 2506000},
            {x: new Date(2021, 6, 3, 12, 10, 30), y: 2798000},
            {x: new Date(2021, 6, 3, 12, 15, 30), y: 3386000},
            {x: new Date(2021, 6, 3, 12, 20, 30), y: 6944000},
            {x: new Date(2021, 6, 3, 12, 25, 30), y: 6026000},
            {x: new Date(2021, 6, 3, 12, 30, 30), y: 2394000},
            {x: new Date(2021, 6, 3, 12, 35, 30), y: 1872000},
            {x: new Date(2021, 6, 3, 12, 40, 30), y: 2140000},
            {x: new Date(2021, 6, 3, 12, 45, 30), y: 7289000},
            {x: new Date(2021, 6, 3, 12, 50, 30), y: 4830000},
            {x: new Date(2021, 6, 3, 12, 55, 30), y: 2009000},
            {x: new Date(2021, 6, 3, 13, 0, 30), y: 2840000},
            {x: new Date(2021, 6, 3, 13, 5, 30), y: 2396000},
            {x: new Date(2021, 6, 3, 13, 10, 30), y: 1613000},
            {x: new Date(2021, 6, 3, 13, 15, 30), y: 2821000},
            {x: new Date(2021, 6, 3, 13, 20, 30), y: 2000000}
        ]
    }]
});

let chartCpm = new CanvasJS.Chart("chartContainerCpm", {
    animationEnabled: true,
    title:{
        text: "Cpm"
    },
    axisY: {
        //title: "Units Sold",
        valueFormatString: "#0,,.",
        suffix: "mn",
        stripLines: [{
            value: 3366500,
            label: "Average"
        }]
    },
    data: [{
        yValueFormatString: "#,###",
        xValueFormatString: "HH:MM:SS",
        type: "spline",
        dataPoints: [
            {x: new Date(2021, 6, 3, 12, 5, 30), y: 2506000},
            {x: new Date(2021, 6, 3, 12, 10, 30), y: 2798000},
            {x: new Date(2021, 6, 3, 12, 15, 30), y: 3386000},
            {x: new Date(2021, 6, 3, 12, 20, 30), y: 6944000},
            {x: new Date(2021, 6, 3, 12, 25, 30), y: 6026000},
            {x: new Date(2021, 6, 3, 12, 30, 30), y: 2394000},
            {x: new Date(2021, 6, 3, 12, 35, 30), y: 1872000},
            {x: new Date(2021, 6, 3, 12, 40, 30), y: 2140000},
            {x: new Date(2021, 6, 3, 12, 45, 30), y: 7289000},
            {x: new Date(2021, 6, 3, 12, 50, 30), y: 4830000},
            {x: new Date(2021, 6, 3, 12, 55, 30), y: 2009000},
            {x: new Date(2021, 6, 3, 13, 0, 30), y: 2840000},
            {x: new Date(2021, 6, 3, 13, 5, 30), y: 2396000},
            {x: new Date(2021, 6, 3, 13, 10, 30), y: 1613000},
            {x: new Date(2021, 6, 3, 13, 15, 30), y: 2821000},
            {x: new Date(2021, 6, 3, 13, 20, 30), y: 2000000}
        ]
    }]
});

function init () {
    chartCarbonDioxide.render();
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

    // Uncomment to use Heatmap
    // ymaps.modules.require(['Heatmap'], function (Heatmap) {
    //     var data = [[53.9006, 27.5590], [53.92, 27.59]],
    //         heatmap = new Heatmap(data);
    //     heatmap.radius = 1000;
    //     heatmap.setMap(myMap);
    // });
    // locals.Activities.find({}, function(err, activities_list){
    //     if (err){
    //         console.log(err);
    //     }else{
    //         for(let i=0; i<activities_list.length; i++){
    //             locals.ActivityPlace.findById(activities_list[i].activityPlace_id, function (err, activity_place){
    //                 if (err){
    //                     console.log(activity_place);
    //                 } else {
    //                     myMap.geoObjects
    //                         .add(new ymaps.Placemark([activity_place.latitude, activity_place.longitude], {
    //                             balloonContent: '<strong>red</strong> color'
    //                         }, {
    //                             preset: 'islands#redFactoryIcon'
    //                         }))
    //                 }
    //             })
    //         }
    //     }
    // });
    // myMap.geoObjects
    //     .add(new ymaps.Placemark([53.9040, 27.5590], {
    //         balloonContent: 'Cycle to work scheme'
    //     }, {
    //         preset: 'islands#redFactoryIcon'
    //     }))

    myPlacemark = new ymaps.Placemark([53.9040, 27.5590], {
        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
        balloonContentHeader: 'Cycle to work scheme',
        balloonContentBody: 'By opting for cycle to work scheme I intend to cut my carbon footprint (CO2 emission) and therefore reduce harmful and deadly emissions.'
    },{
        preset: 'islands#redFactoryIcon'
    });
    myMap.geoObjects.add(myPlacemark);
    // myMap.geoObjects
    //     .add(new ymaps.Placemark([53.9056, 27.57], {
    //         balloonContent: 'Plant a tree'
    //     }, {
    //         preset: 'islands#redFactoryIcon'
    //     }))
    //
    // myMap.geoObjects
    //     .add(new ymaps.Placemark([53.9000, 27.57], {
    //         balloonContent: 'Donate clothes'
    //     }, {
    //         preset: 'islands#redFactoryIcon'
    //     }))

    myMap.events.add('balloonopen', function (event) {
        modal.style.display = "block";

        chartCarbonDioxide.render();
        chartContainerTvoc.render();
        chartFormaldehyde.render();
        chartToluence.render();
        chartCpm.render();
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
