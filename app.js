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

const categories = [
  {
    categoryTitle: 'GitHub',
    href: 'https://github.com/dreamxinxcode',
    image: '',
    bookmarks: [
      {title: '', url: ''},
    ]
  },
  {
    categoryTitle: 'Dev',
    href: '',
    image: '',
    bookmarks: [
      {title: '', url: ''},
    ]
  },
  {
    categoryTitle: 'School',
    href: '',
    image: '',
    bookmarks: [
      {title: '', url: ''},
    ]
  },
  {
    categoryTitle: 'Shop',
    href: '',
    image: '',
    bookmarks: [
      {title: '', url: ''},
    ]
  },
];

const categoriesList = [];

for (let category of categories) {
  categoriesList.push(category.categoryTitle);
}
console.log(categoriesList)

const options = categoriesList.map((title) => {
  return `<option value-'${title}'>${title}</option>`
});
console.log(categoriesList)

// const bookmarks = bookmark_list.map((bookmark) => {
//   return `<li><a href='${bookmark.url}'>${bookmark.title}</a></li>`;
// });


const updateClock = () => {
  const now = new Date();
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
  const overlay = document.getElementById('overlay');

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
  const title = document.getElementById('title-input').value;
  const url = document.getElementById('url-input').value;
  const category = document.getElementById('category-input').value;

  if (!title || !url || !category) {
    const modal = document.getElementById('modal');
    const errorMessage = `<p id='error-message'>Error: All fields must be valid.</p>`;
    modal.innerHTML += errorMessage;
    return;
  }

  event.preventDefault(); // Prevent page reload on form submit
  const bookmark = {title, category, url};
  localStorage.setItem('bookmarks', JSON.stringify(person));
}