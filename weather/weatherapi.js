var a;
	function getW( d ){

		a = d;

		today = d.forecast.simpleforecast.forecastday[0]; 
		tomorrow = d.forecast.simpleforecast.forecastday[1];
		after_tomorrow = d.forecast.simpleforecast.forecastday[2];


		yahoo_weather = [
			"tstorms",
			"cloudy",
			"mostlycloudy",
			"rain",
			"partlycloudy",
			"/ig/images/weather/sunny.gif",
			"/ig/images/weather/mist.gif",
			"/ig/images/weather/fog.gif",
			"/ig/images/weather/mostly_cloudy.gif",
			"/ig/images/weather/mostly_cloudly.gif",
			"/ig/images/weather/partly_cloudy.gif",
			"/ig/images/weather/haze.gif",
			"/ig/images/weather/smoke.gif",
			"/ig/images/weather/flurries.gif",
			"/ig/images/weather/chance_of_rain.gif",
			"/ig/images/weather/mostly_sunny.gif",
			"/ig/images/weather/chance_of_tstorm.gif",
			"/ig/images/weather/sleet.gif",
			"/ig/images/weather/snow.gif",
			"/ig/images/weather/icy.gif",
			"/ig/images/weather/dust.gif",
			"/ig/images/weather/chance_of_storm.gif" ];
		disp_weather = [
			'weather/weather_storm.png',
			'weather/weather_cloudy.png',
			'weather/weather_mostlycloudy.png',
			'weather/weather_rain.png',
			'weather/weather_cloudy.png',
			'weather/weather_sunny.png',
			'weather/weather_storm.png',
			'weather/weather_storm.png',
			'weather/weather_fog.png',
			'weather/weather_mostlycloudy.png',
			'weather/weather_haze.png',
			'weather/weather_haze.png',
			'weather/weather_icyrain.png' ,
			'weather/weather_chancestorm.png',
			'weather/weather_mostlysunny.png',
			'weather/weather_chancestorm.png',	// 원래는 tstorm
			'weather/weather_snow.png',
			'weather/weather_snow.png',
			'weather/weather_snow.png',
			'weather/weather_dust.png',
			'weather/weather_chancestorm.png' ];

		for (i = 0; i < yahoo_weather.length; i++ )
			if( today.icon == yahoo_weather[ i ] )
				weathericon.src = disp_weather[ i ];

		$("#todaywindspeed").text(today.avewind.kph + " Km/H " );
		$("#todayrained").text(today.qpf_allday.mm + " mm " );

		$("#today_humid").text(today.avehumidity + " % " );
		$("#tomorrow_humid").text(tomorrow.avehumidity + " % " );
		$("#today_humid1").text(today.avehumidity + " % " );
		
		$("#totomorrow_humid").text(after_tomorrow.avehumidity + " % " );
		$("#winddirection").text(today.maxwind.dir);
		$("#today_temp1").text(today.low.celsius + " / " + today.high.celsius);
		$("#today_temp").text(today.low.celsius + " / " + today.high.celsius);
		$("#tomorrow_temp").text(tomorrow.low.celsius + " / " + tomorrow.high.celsius);
		$("#after_tomorrow_temp").text(after_tomorrow.low.celsius + " / " + after_tomorrow.high.celsius);
	}
	$(document).ready(function() { 
		$.getJSON( 'http://api.wunderground.com/api/2978246bdf00abc1/forecast/lang:KR/q/KR/Seoul.json?callback=getW&aa=?' );
	} );


  



	