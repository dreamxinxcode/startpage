// Open Weather Map API
fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=Victoria&appid=${API_KEY}`
)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("Error:" + response.status);
      return;
    }

    response.json().then(function (data) {});
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });

const bookmarks = {
  school: {
    title: "School",
    icon: '<i class="fa fa-graduation-cap"></i>',
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
    icon: "<i class='fa fa-database'></i>",
    links: [
      {
        title: "SQL Zoo",
        url: "https://sqlzoo.net/",
      },
    ],
  },
};

if (!localStorage.getItem("bookmarks")) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

const parsedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));

let cards = [];
for (let category in parsedBookmarks) {
  const links = parsedBookmarks[category].links.map((link) => {
    return `<li><a href=${link.url} target='_blank'>${link.title}</a></li>`;
  });

  cards.push(`
    <div class='card'>
      <div class='card-title-container'>
        ${parsedBookmarks[category].icon}
        <h2 class='card-title'>${parsedBookmarks[category].title}</h2>
      </div>
      <ul>
        ${links.join(" ")}
      </ul>
    </div>
  `);
}
const cardContainer = document.getElementById("card-container");
cardContainer.innerHTML += cards.join(" ");

//// Category select
const categoryList = [];
for (let bookmark in parsedBookmarks) {
  categoryList.push(parsedBookmarks[bookmark].title);
}

const options = categoryList.map((title) => {
  return `<option value-'${title}'>${title}</option>`;
});
////

const updateClock = () => {
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

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  hours = hours % 12 || 12;
  minutes = minutes.toString().length === 2 ? minutes : "0" + minutes;
  const amOrPm = now.getHours() >= 12 ? "pm" : "am";

  const time = `${hours} : ${minutes} ${amOrPm}`;
  const dayOfWeek = now.getDay();
  const month = now.getMonth();
  const dayOfMonth = now.getDate();
  const year = now.getFullYear();
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
        <form onsubmit='addCategory()' method='POST'>
          <input id='category-title-input' type='text' placeholder='Title'>
          <input id='category-icon-input' type='text' placeholder='Icon'>
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

  const newBookmark = { title, url };
  const parsedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  parsedBookmarks[category.toLowerCase()].links.push(newBookmark);
  localStorage.setItem("bookmarks", JSON.stringify(parsedBookmarks));
};

const addCategory = () => {
  const title = document.getElementById("category-title-input").value;
  const icon = document.getElementById("category-icon-input").value;

  if (!title || !icon) {
    const modal = document.getElementById("modal");
    const errorMessage = `<p id='error-message'>Error: All fields must be valid.</p>`;
    modal.innerHTML += errorMessage;
    return;
  }

  const parsedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  parsedBookmarks[title.toLowerCase()] = {
    title: title,
    icon: icon,
    links: [],
  };
  localStorage.setItem("bookmarks", JSON.stringify(parsedBookmarks));
};
