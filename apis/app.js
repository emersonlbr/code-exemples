console.log("What's up dude?");
let h1 = document.querySelector("h1");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let div = document.querySelector("div");

// getting the users position
navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat, lon);
    let api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
    // let api = "https://fcc-weather-api.glitch.me/api/current?lat=40.730610&lon=-73.9352";
    
    fetch(api)
      // transform the data to json
      .then(function(response) { return response.json(); })
      // dealing with the data
      .then(function(data) {
      console.log(data.name);
      h1.innerHTML = `${data.name} - ${data.sys.country}`;
      p1.innerHTML = `The temperature is ${Math.floor(data.main.temp)}ºC`;
      p2.innerHTML = data.weather[0].description;
      div.innerHTML = `Max: ${data.main.temp_max} Min: ${data.main.temp_min}`;

    });
});