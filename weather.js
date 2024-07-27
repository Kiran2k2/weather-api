document.addEventListener('DOMContentLoaded', () => {
    let City_info = document.getElementById('City_info');
    let Cityname = document.getElementById('Cityname');
    let Temperature = document.getElementById('Temperature');
    let Weather_Description = document.getElementById(
      'Weather_Description'
    );
    let search_btn = document.getElementById('search_btn');
    console.log(
      City_info,
      Cityname,
      Temperature,
      Weather_Description,
      search_btn
    );

    search_btn.addEventListener('click', () => {
      let city = City_info.value;
      console.log(city);
      if (City_info.value !== '') {
        getWeatherdata(city);
      } else {
        console.log('Please enter your city name');
      }
    });
  });

  async function getWeatherdata(city) {
    let apiKey = '474137046a5f42b5955b674b9f9eb7b3';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      console.log(data);
      if (data.cod === 200) {
        Cityname.innerHTML = ` ${data.name}`;
        Temperature.innerHTML = ` ${data.main.temp}°C`;
        Weather_Description.innerHTML = ` ${data.weather[0].description}`;
      }
    } catch (error) {
      console.log(error);
    }
  }