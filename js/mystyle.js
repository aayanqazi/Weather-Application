$(document).ready(function(){
$('#getweather').on('click',function(){
$.getJSON("http://ip-api.com/json/?callback=?",function(asap)
{
    var latitude = asap.lat;
    var longitude = asap.lon;
    var link = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=2835cc3812df97ba8b3dc3f1ed15ea68&units=metric"
$('.longitude').html(link);

$.getJSON(link,function(data){

var html="";
var i = data.weather[0].icon;
  var loc = data.name;
  var temp = data.main.temp +" "+ "&deg;C";
 var windspeed = data.wind.speed;
  var wind= windspeed +"km/h ";
  var humidity= data.main.humidity + "%";
  var pressure = data.main.pressure +'Pa';
  var description = data.weather[0].description;
    html+="<img src='http://openweathermap.org/img/w/"+i+".png'>";
    var j ="http://openweathermap.org/img/w/"+i+".png";
    $('.image').html(html);
    $('.location').html(loc);
  $('.temperature').html(temp);
  $('.windspeed').html(wind);
  $('.humidity').html(humidity);
  $('.pressure').html(pressure);
  $('.des').html(description);
})
})
}),
$('#getmessage').on('click',function(){
        $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
            var table_body = "";
            $.each(data, function(k, v) {
                table_body += "<tr><td>" + k + "</td><td><b>" + v + "</b></td></tr>";
            });
            $("#gettable").html(table_body);
        });


});
});