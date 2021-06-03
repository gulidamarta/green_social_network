// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    let chart = new CanvasJS.Chart("chartContainerLondon", {
        animationEnabled: true,
        title:{
            text: "Data from sensors"
        },
        axisY: {
            title: "Units Sold",
            valueFormatString: "#0,,.",
            suffix: "mn",
            stripLines: [{
                value: 3366500,
                label: "Average"
            }]
        },
        data: [{
            yValueFormatString: "#,### Units",
            xValueFormatString: "YYYY",
            type: "spline",
            dataPoints: [
                {x: new Date(2002, 0), y: 2506000},
                {x: new Date(2003, 0), y: 2798000},
                {x: new Date(2004, 0), y: 3386000},
                {x: new Date(2005, 0), y: 6944000},
                {x: new Date(2006, 0), y: 6026000},
                {x: new Date(2007, 0), y: 2394000},
                {x: new Date(2008, 0), y: 1872000},
                {x: new Date(2009, 0), y: 2140000},
                {x: new Date(2010, 0), y: 7289000},
                {x: new Date(2011, 0), y: 4830000},
                {x: new Date(2012, 0), y: 2009000},
                {x: new Date(2013, 0), y: 2840000},
                {x: new Date(2014, 0), y: 2396000},
                {x: new Date(2015, 0), y: 1613000},
                {x: new Date(2016, 0), y: 2821000},
                {x: new Date(2017, 0), y: 2000000}
            ]
        }]
    });
    chart.render();

    chart = new CanvasJS.Chart("chartContainerParis", {
        animationEnabled: true,
        title:{
            text: "Data from sensors"
        },
        axisY: {
            title: "Units Sold",
            valueFormatString: "#0,,.",
            suffix: "mn",
            stripLines: [{
                value: 3366500,
                label: "Average"
            }]
        },
        data: [{
            yValueFormatString: "#,### Units",
            xValueFormatString: "YYYY",
            type: "spline",
            dataPoints: [
                {x: new Date(2003, 0), y: 2506000},
                {x: new Date(2004, 0), y: 2798000},
                {x: new Date(2005, 0), y: 3386000},
                {x: new Date(2006, 0), y: 6944000},
                {x: new Date(2007, 0), y: 6026000},
                {x: new Date(2008, 0), y: 2394000},
                {x: new Date(2009, 0), y: 1872000},
                {x: new Date(2010, 0), y: 2140000},
                {x: new Date(2011, 0), y: 7289000},
                {x: new Date(2012, 0), y: 4830000},
                {x: new Date(2013, 0), y: 2009000},
                {x: new Date(2014, 0), y: 2840000},
                {x: new Date(2015, 0), y: 2396000},
                {x: new Date(2016, 0), y: 1613000},
                {x: new Date(2017, 0), y: 2821000},
                {x: new Date(2018, 0), y: 2000000}
            ]
        }]
    });
    chart.render();

    chart = new CanvasJS.Chart("chartContainerTokyo", {
        animationEnabled: true,
        title:{
            text: "Data from sensors"
        },
        axisY: {
            title: "Units Sold",
            valueFormatString: "#0,,.",
            suffix: "mn",
            stripLines: [{
                value: 3366500,
                label: "Average"
            }]
        },
        data: [{
            yValueFormatString: "#,### Units",
            xValueFormatString: "YYYY",
            type: "spline",
            dataPoints: [
                {x: new Date(2004, 0), y: 2506000},
                {x: new Date(2005, 0), y: 2798000},
                {x: new Date(2006, 0), y: 3386000},
                {x: new Date(2007, 0), y: 6944000},
                {x: new Date(2008, 0), y: 6026000},
                {x: new Date(2009, 0), y: 2394000},
                {x: new Date(2010, 0), y: 1872000},
                {x: new Date(2011, 0), y: 2140000},
                {x: new Date(2012, 0), y: 7289000},
                {x: new Date(2013, 0), y: 4830000},
                {x: new Date(2014, 0), y: 2009000},
                {x: new Date(2015, 0), y: 2840000},
                {x: new Date(2016, 0), y: 2396000},
                {x: new Date(2017, 0), y: 1613000},
                {x: new Date(2018, 0), y: 2821000},
                {x: new Date(2019, 0), y: 2000000}
            ]
        }]
    });
    chart.render();

    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openChart(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}