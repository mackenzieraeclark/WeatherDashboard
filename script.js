// api key: 7519ccef7e06a4380f78e8f38bfc182c

$(document).ready(function(){
    $("#search-button").click(function(){
        var city = $("#search-value").val();

        // AJAX for Today's Forecast
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=7519ccef7e06a4380f78e8f38bfc182c",
            type: "GET",
            dataType: "jsonp", // Needed to call API
            success: function for1(data){ // call back

                // Todays Forecast
                var widget1 = today(data);
                $("#today").html(widget1);
            } 
        });

        // AJAX for Four Day Forecast
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&APPID=7519ccef7e06a4380f78e8f38bfc182c",
            type: "GET",
            dataType: "jsonp", // Needed to call API
            success: function for2(data){ // call back

                // 5 day Forecast
                var widget2 = forecast(data);
                $("#forecast").html(widget2);
            } 
        });

        // Check to see if user did not input a city
        if(city = city){
            // Empty field when user clicks button
            $("#search-value").val('');
        } else{
            // Create error message
            $("#error").html('Please enter a city to search.');
            // Also empty field
            $("#search-value").val('');
        }
    })
});

//Show the forcast for today
function today(data) {
    return "<h2>" + data.name + ", " + data.sys.country + "</h2>" +
           "<h3>Today's forecast:  <img src='http://openweathermap.org/img/wn/" + data.weather[0].icon +".png'>" + data.weather[0].main + "</h3>" +
           "<h4>Temperature:  " + data.main.temp + " ˚F</h4>" +
           "<h5>High of:  " + data.main.temp_max + " ˚F</h5>" +
           "<h5>Low of:  " + data.main.temp_min + " ˚F</h5>" +
           "<h4>Humidity:  " + data.main.humidity + " %</h4>" +
           "<h4>Cloudiness:  " + data.clouds.all + " %</h4>";
}

// Show the forcast for next four days
function forecast(data) {
    return "<h3>Today's forecast:  <img src='http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon +".png'>" + data.list[0].weather[0].main + "</h3>" +
           "<h4>Temperature:  " + data.list[0].main.temp + " ˚F</h4>" +
           "<h4>Humidity:  " + data.list[0].main.humidity + " %</h4>" +
           "<h4>Cloudiness:  " + data.list[0].clouds.all + " %</h4>";
}