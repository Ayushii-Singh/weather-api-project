const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const datahide = document.querySelector('.middle_layer');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const getInfo = async (event) => {
  event.preventDefault();
  const cityname = document.getElementById('cityname').value;
  if (cityname === "") {
    city_name.innerHTML = 'Please type the city name before you search';
    datahide.classList.add('data_hide');
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=e4028c98ad56db8e098bb89c2d590c5f`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === '404') {
        city_name.innerHTML = 'City not found';
        datahide.classList.add('data_hide');
        return;
      }
      const arrData = [data];
      console.log(data);
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerHTML = `${Math.round(arrData[0].main.temp)/10}<sup>o</sup>C`;
      const tempMood = arrData[0].weather[0].main;
      datahide.classList.remove('data_hide');
    } catch {
      city_name.innerText = "Please enter the city name properly";
      datahide.classList.add('data_hide');
    }
  }
}

submitBtn.addEventListener('click', getInfo);
