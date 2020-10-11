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

const bookmarks = {
  school: {
    title: "School",
    links: [
      {
        title: "Compass",
        url: "https://web.compass.lighthouselabs.ca/session/new",
      },
      { title: "Lighhouse Labs", url: "https://lighthouselabs.ca/" },
    ],
  },
  database: {
    title: "Database",
    links: [
      {
        title: "Compass",
        url: "https://web.compass.lighthouselabs.ca/session/new",
      },
      { title: "Lighthouse Labs", url: "https://lighthouselabs.ca/" },
    ],
  },
};

localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
const parsedList = JSON.parse(localStorage.getItem("bookmarks"));
console.log(parsedList);
const categoryList = [];
for (let bookmark in parsedList) {
  categoryList.push(parsedList[bookmark].title);
}

const options = categoryList.map((title) => {
  return `<option value-'${title}'>${title}</option>`;
});
console.log(categoryList);

const updateClock = () => {
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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

  const dayOfWeek = now.getDay();
  const month = now.getMonth();
  const dayOfMonth = now.getDate();
  const year = now.getFullYear();

  const time = `${now.getHours()} : ${now.getMinutes()}`;
  const date = `${days[dayOfWeek]}, ${months[month]} ${dayOfMonth} ${year}`;

  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;

  setTimeout(updateClock, 1000);
};

updateClock();

const attachModal = () => {
  const overlay = document.getElementById("overlay");

  const modal = `
    <div id='overlay'>
      <div id='modal'>
        <form onsubmit='addBookmark()' method='POST'>
          <input id='title-input' type='text' placeholder='Title'>
          <input id='url-input' type='text' placeholder='URL'>
          <select name="category-input" id="category-input">
            ${options}
          </select>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  `;

  if (overlay) {
    overlay.remove();
  } else {
    document.body.innerHTML += modal;
  }
};

const addBookmark = () => {
  const title = document.getElementById("title-input").value;
  const url = document.getElementById("url-input").value;
  const category = document.getElementById("category-input").value;

  if (!title || !url || !category) {
    const modal = document.getElementById("modal");
    const errorMessage = `<p id='error-message'>Error: All fields must be valid.</p>`;
    modal.innerHTML += errorMessage;
    return;
  }

  event.preventDefault(); // Prevent page reload on form submit
  const bookmarks = { title, category, url };
  localStorage.setItem("bookmarks", bookmarks);
};
