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
      { title: "Lighthouse Labs", url: "https://lighthouselabs.ca/" },
    ],
  },

  katas: {
    title: "Katas",
    icon: '<i class="fa fa-terminal"></i>',
    links: [
      {
        title: "Code Wars",
        url: "https://www.codewars.com/",
      },
      {
        title: "LeetCode",
        url: "https://leetcode.com/",
      },
      {
        title: "HackerRank",
        url: "https://www.hackerrank.com/",
      },
      {
        title: "Advent of Code",
        url: "https://adventofcode.com/",
      },
      {
        title: "Edabit",
        url: "https://edabit.com/challenges",
      },
    ],
  },

  javascript: {
    title: "Javascript",
    icon: "<i class='fab fa-js-square'></i>",
    links: [
      {
        title: "MDN Javascript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        title: "r/javascript",
        url: "https://www.reddit.com/r/javascript/",
      },
      {
        title: "r/reactjs",
        url: "https://www.reddit.com/r/reactjs/",
      },
    ],
  },

  python: {
    title: "Python",
    icon: "<i class='fab fa-python'></i>",
    links: [
      {
        title: "Real Python",
        url: "https://realpython.com/",
      },
      {
        title: "r/django",
        url: "https://www.reddit.com/r/django/",
      },
      {
        title: "r/Python",
        url: "https://www.reddit.com/r/Python/",
      },
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
      {
        title: "Elephant SQL",
        url: "https://www.elephantsql.com/",
      },
    ],
  },

  css: {
    title: "CSS",
    icon: "<i class='fa fa-css3'></i>",
    links: [
      {
        title: "Flexbox Froggie",
        url: "https://flexboxfroggy.com/",
      },
    ],
  },

  linux: {
    title: "Linux",
    icon: "<i class='fa fa-linux'></i>",
    links: [
      {
        title: "Arch Linux Forum",
        url: "https://bbs.archlinux.org/",
      },
      {
        title: "r/unix",
        url: "https://www.reddit.com/r/unixporn/",
      },
      {
        title: "r/linux",
        url: "https://www.reddit.com/r/linux/",
      },
      {
        title: "r/archlinux",
        url: "https://www.reddit.com/r/archlinux/",
      },
      {
        title: "r/gentoo",
        url: "https://www.reddit.com/r/gentoo/",
      },
    ],
  },

  reddit: {
    title: "Reddit",
    icon: "<i class='fa fa-reddit'></i>",
    links: [
      {
        title: "Reddit",
        url: "https://www.reddit.com/",
      },
      {
        title: "r/unix",
        url: "https://www.reddit.com/r/unixporn/",
      },
      {
        title: "r/hacking",
        url: "https://www.reddit.com/r/hacking/",
      },
      {
        title: "r/archlinux",
        url: "https://www.reddit.com/r/archlinux/",
      },
      {
        title: "r/CEH",
        url: "https://www.reddit.com/r/CEH/",
      },
      {
        title: "r/django",
        url: "https://www.reddit.com/r/django/",
      },
      {
        title: "r/gentoo",
        url: "https://www.reddit.com/r/gentoo/",
      },
      {
        title: "r/javascript",
        url: "https://www.reddit.com/r/javascript/",
      },
      {
        title: "r/LearnJapanese",
        url: "https://www.reddit.com/r/LearnJapanese/",
      },
      {
        title: "r/linux",
        url: "https://www.reddit.com/r/linux/",
      },
      {
        title: "r/LiveOverflow",
        url: "https://www.reddit.com/r/LiveOverflow/",
      },
      {
        title: "r/lockpicking",
        url: "https://www.reddit.com/r/lockpicking/",
      },
      {
        title: "r/pothos",
        url: "https://www.reddit.com/r/pothos/",
      },
      {
        title: "r/programming",
        url: "https://www.reddit.com/r/programming/",
      },
      {
        title: "r/ps3hacks",
        url: "https://www.reddit.com/r/ps3hacks/",
      },
      {
        title: "r/Python",
        url: "https://www.reddit.com/r/Python/",
      },
      {
        title: "r/rails",
        url: "https://www.reddit.com/r/rails/",
      },
      {
        title: "r/reactjs",
        url: "https://www.reddit.com/r/reactjs/",
      },
    ],
  },

  modding: {
    title: "Modding",
    icon: "<i class='fa fa-gamepad'></i>",
    links: [
      {
        title: "Semjases",
        url: "https://www.semjases.com/",
      },
      {
        title: "Last Team Standing",
        url: "https://lastteamstanding.uk/",
      },
      {
        title: "ConsoleCrunch",
        url: "https://consolecrunch.com/",
      },
      {
        title: "NextGenUpdate",
        url: "https://www.nextgenupdate.com/",
      },
      {
        title: "r/ps3hacks",
        url: "https://www.reddit.com/r/ps3hacks/",
      },
    ],
  },

  security: {
    title: "Security",
    icon: "<i class='fa fa-user-secret'></i>",
    links: [
      {
        title: "Hack The Box",
        url: "https://www.hackthebox.eu/",
      },
      {
        title: "OverTheWire",
        url: "https://overthewire.org/wargames/",
      },
      {
        title: "r/hacking",
        url: "https://www.reddit.com/r/hacking/",
      },
      {
        title: "r/CEH",
        url: "https://www.reddit.com/r/CEH/",
      },
      {
        title: "r/LiveOverflow",
        url: "https://www.reddit.com/r/LiveOverflow/",
      },
    ],
  },

  lock: {
    title: "Lock",
    icon: "<i class='fa fa-lock'></i>",
    links: [
      {
        title: "Sparrows Lock Picks",
        url: "https://www.sparrowslockpicks.ca/",
      },
      {
        title: "r/lockpicking",
        url: "https://www.reddit.com/r/lockpicking/",
      },
    ],
  },

  vivarium: {
    title: "Vivarium",
    icon: "<i class='fa fa-pagelines'></i>",
    links: [
      {
        title: "Understory Enterprises inc",
        url: "https://www.understoryenterprises.com/",
      },
      {
        title: "Dendroboard",
        url: "https://www.dendroboard.com/",
      },
      {
        title: "Frog Forum",
        url: "https://www.frogforum.net/",
      },
      {
        title: "r/pothos",
        url: "https://www.reddit.com/r/pothos/",
      },
    ],
  },

  geology: {
    title: "Geology",
    icon: "<i class='fas fa-gem'></i>",
    links: [
      {
        title: "Numista",
        url: "https://en.numista.com/",
      },
    ],
  },

  language: {
    title: "Language",
    icon: "<i class='fas fa-globe-americas'></i>",
    links: [
      {
        title: "Hello Talk",
        url: "https://www.hellotalk.com/",
      },
      {
        title: "r/LearnJapanese",
        url: "https://www.reddit.com/r/LearnJapanese/",
      },
    ],
  },

  currency: {
    title: "Currency",
    icon: "<i class='fas fa-coins'></i>",
    links: [
      {
        title: "Numista",
        url: "https://en.numista.com/",
      },
      {
        title: "Ebay - bluenose48",
        url: "https://www.ebay.ca/usr/bluenose48",
      },
    ],
  },

  crypto: {
    title: "Crypto",
    icon: "<i class='fa fa-bitcoin'></i>",
    links: [
      {
        title: "Blockchain",
        url: "https://www.blockchain.com/explorer",
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

  const time = `${hours} <span id='clock-colon'>:</span> ${minutes} ${amOrPm}`;
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
