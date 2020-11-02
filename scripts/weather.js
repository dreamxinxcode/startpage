let coords = {
  latitude: '',
  longitude: '',
};

const fetchIP = async () => {
  const resopnse = await fetch('https://api.ipify.org?format=json');
  const data = await resopnse.json();
  return data;
};

console.log(fetchIP());
const getLocation = (callback) => {
  // let promise = new Promise((resolve, reject) => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       latitude = position.coords.latitude;
  //       longitude = position.coords.longitude;
  //     });
  //   }
  // });
};

fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=Victoria&appid=e0d88f84620009644667c282466ed877`
)
  .then((response) => response.json())
  .then((data) => {
    getLocation(() => console.log('lat', latitude, 'lon', longitude));
    console.log(data);
  })
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });