"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(results) {
        $("#fortune-text").html(results);
    }

function getFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', showFortune);

}

$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER

function showWeather(results) {
    let forecast = results['forecast'];

    $('#weather-info').html(forecast);

    // TODO: request weather with that URL and show the forecast in #weather-info
}

function getForecast(evt) {
    evt.preventDefault();

    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get('/weather.json',
          formData,
          showWeather);
}

$("#weather-form").on('submit', getForecast);




// PART 3: ORDER MELONS

function orderStatus(results) {
    $("#order-status").html(results['msg']);

    if (results['code'] === 'ERROR'){
        $('#order-status').addClass('order-error');
    }
}

function orderMelons(evt) {
    evt.preventDefault();

    let melonData = {"qty": $("#qty-field").val(),
                     "melon_type": $("#melon-type-field").val()};

    $.post('/order-melons.json',
            melonData,
            orderStatus
    );

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


