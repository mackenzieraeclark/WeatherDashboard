// api key: 7519ccef7e06a4380f78e8f38bfc182c

$(document).ready(function(){
    $("#search-button").click(function(){
        var city = $("#search-value").val();

        // Check to see if user did not input a city
        if(city != ''){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=7519ccef7e06a4380f78e8f38bfc182c",
                type: "GET",
                dataType: "jsonp", // Needed to call API
                success: function(data){ // call back
                    // console.log(data);
                    var widget = today(data);
                    $("#today").html(widget);
                    // Empty field when user clicks button
                    $("#search-value").val('');
                } 
            });
        } else{
            $("#error").html('Please enter a city to search.');
        }
    })
});

//Show the forcast for today
function today(data) {
    return "<h2>" + data.name + ", " + data.sys.country + "</h2>" +
           "<h3>Today's forecast:  " + data.weather[0].main + "   " + data.weather[0].icon + "</h3>" +
           "<h4>Temperature:  " + data.main.temp + " ˚F</h4>" +
           "<h5>High of:  " + data.main.temp_max + " ˚F</h5>" +
           "<h5>Low of:  " + data.main.temp_min + " ˚F</h5>" +
           "<h4>Humidity:  " + data.main.humidity + " %</h4>" +
           "<h4>Cloudiness:  " + data.clouds.all + " %</h4>";
}

