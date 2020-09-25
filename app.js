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

const categories = ['GitHub', 'School'];

const categoryList = categories.map(category => `<option value="${category}">${category}</option>`);

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
  const overlay = document.getElementById('overlay');

  const modal = `
    <div id='overlay'>
      <div id='modal'>
        <form onsubmit='addBookmark()' method='POST'>
          <input id='title-input' type='text' placeholder='Title'>
          <input id='url-input' type='text' placeholder='URL'>
          <select name="category-input" id="category-input">
            ${categoryList}
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
  const title = document.getElementById('title-input').value;
  const url = document.getElementById('url-input').value;
  const category = document.getElementById('category-input').value;

  if (!title || !url) {
    const modal = document.getElementById('modal');
    const errorMessage = `<p id='error-message'>Error: All fields must be valid.</p>`;
    modal.innerHTML += errorMessage;
    return;
  }

  event.preventDefault(); // Prevent page reload on form submit
  const bookmark = {title, category, url};
  bookmark_list.push(bookmark);
  console.log(bookmark_list);
}