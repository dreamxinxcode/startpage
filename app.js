// Open Weather Map API
fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=Victoria&appid=${API_KEY}`
)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("Error:" + response.status);
      return;
    }

    response.json().then(function (data) {
      console.log(data);
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });

const bookmark_list = [
  {
    title: "GitHub",
    category: "category",
    url: "https://github.com/dreamxinxcode",
  },
  { title: "title", category: "category", url: "www.google.com" },
  { title: "title", category: "category", url: "www.google.com" },
];

const bookmarks = bookmark_list.map((bookmark) => {
  return `<li><a href='${bookmark.url}'>${bookmark.title}</a></li>`;
});

document.getElementById("test-ul").innerHTML = bookmarks.join("");

const updateClock = () => {
  const now = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const time = `${now.getHours()} : ${now.getMinutes()}`;

  document.getElementById("time").innerHTML = time;

  setTimeout(updateClock, 1000);
};

updateClock();

const attachModal = () => {
  let isModal = document.getElementById("modal");

  const modal = `
    <div id='modal'>
    <input id='title-input' type='text' placeholder='Title'>
    <input id='url-input' type='text' placeholder='URL'>
      
    </div>
  `;

  if (isModal) {
    isModal.remove();
  } else {
    document.body.innerHTML += modal;
  }
};
