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

const bookmarks = {
  school: {
    title: 'School',
    icon: '<i class="fa fa-graduation-cap"></i>',
    links: [
      {
        title: 'Compass',
        url: 'https://web.compass.lighthouselabs.ca/session/new',
      },
      { title: 'Lighthouse Labs', url: 'https://lighthouselabs.ca/' },
    ],
  },

  katas: {
    title: 'Katas',
    icon: '<i class="fa fa-terminal"></i>',
    links: [
      {
        title: 'Code Wars',
        url: 'https://www.codewars.com/',
      },
      {
        title: 'LeetCode',
        url: 'https://leetcode.com/',
      },
      {
        title: 'HackerRank',
        url: 'https://www.hackerrank.com/',
      },
      {
        title: 'Advent of Code',
        url: 'https://adventofcode.com/',
      },
      {
        title: 'Edabit',
        url: 'https://edabit.com/challenges',
      },
      {
        title: 'awesome-katas',
        url: 'https://github.com/gamontal/awesome-katas',
      },
    ],
  },

  javascript: {
    title: 'Javascript',
    icon: "<i class='fab fa-js-square'></i>",
    links: [
      {
        title: 'MDN Javascript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        title: 'r/javascript',
        url: 'https://www.reddit.com/r/javascript/',
      },
      {
        title: 'r/reactjs',
        url: 'https://www.reddit.com/r/reactjs/',
      },
      {
        title: 'awesome-nodejs',
        url: 'https://github.com/sindresorhus/awesome-nodejs',
      },
      {
        title: 'awesome-react-hooks',
        url: 'https://github.com/rehooks/awesome-react-hooks',
      },
      {
        title: 'awesome-react-components',
        url: 'https://github.com/brillout/awesome-react-components',
      },
      {
        title: 'js_designpatterns',
        url: 'https://github.com/nnupoor/js_designpatterns',
      },
      {
        title: 'awesome-javascript-learning',
        url: 'https://github.com/micromata/awesome-javascript-learning',
      },
      {
        title: 'r/reactjs',
        url: 'https://www.reddit.com/r/reactjs/',
      },
    ],
  },

  python: {
    title: 'Python',
    icon: "<i class='fab fa-python'></i>",
    links: [
      {
        title: 'Real Python',
        url: 'https://realpython.com/',
      },
      {
        title: 'r/django',
        url: 'https://www.reddit.com/r/django/',
      },
      {
        title: 'r/Python',
        url: 'https://www.reddit.com/r/Python/',
      },
      {
        title: 'awesome-python',
        url: 'https://github.com/vinta/awesome-python',
      },
      {
        title: 'awesome-django',
        url: 'https://github.com/wsvincent/awesome-django',
      },
    ],
  },

  database: {
    title: 'Database',
    icon: "<i class='fa fa-database'></i>",
    links: [
      {
        title: 'SQL Zoo',
        url: 'https://sqlzoo.net/',
      },
      {
        title: 'Elephant SQL',
        url: 'https://www.elephantsql.com/',
      },
    ],
  },

  docker: {
    title: 'Docker',
    icon: "<i class='fab fa-docker'></i>",
    links: [
      {
        title: 'awesome-docker',
        url: 'https://github.com/veggiemonk/awesome-docker',
      },
    ],
  },

  css: {
    title: 'CSS',
    icon: "<i class='fa fa-css3'></i>",
    links: [
      {
        title: 'Flexbox Froggie',
        url: 'https://flexboxfroggy.com/',
      },
      {
        title: 'css-protips',
        url: 'https://github.com/AllThingsSmitty/css-protips',
      },
      {
        title: 'awesome-css',
        url: 'https://github.com/awesome-css-group/awesome-css',
      },
      {
        title: 'Flexbox Froggie',
        url: 'https://flexboxfroggy.com/',
      },
    ],
  },

  git: {
    title: 'Git ',
    icon: "<i class='fab fa-github-alt'></i>",
    links: [
      {
        title: 'Real Python',
        url: 'https://realpython.com/',
      },
      {
        title: 'awesome-readme',
        url: 'https://github.com/matiassingers/awesome-readme',
      },
      {
        title: 'Real Python',
        url: 'https://realpython.com/',
      },
      {
        title: 'Real Python',
        url: 'https://realpython.com/',
      },
      {
        title: 'Real Python',
        url: 'https://realpython.com/',
      },
    ],
  },

  linux: {
    title: 'Linux',
    icon: "<i class='fa fa-linux'></i>",
    links: [
      {
        title: 'Arch Linux Forum',
        url: 'https://bbs.archlinux.org/',
      },
      {
        title: 'r/unix',
        url: 'https://www.reddit.com/r/unixporn/',
      },
      {
        title: 'r/linux',
        url: 'https://www.reddit.com/r/linux/',
      },
      {
        title: 'r/archlinux',
        url: 'https://www.reddit.com/r/archlinux/',
      },
      {
        title: 'r/gentoo',
        url: 'https://www.reddit.com/r/gentoo/',
      },
      {
        title: 'awesome-linux',
        url: 'https://github.com/aleksandar-todorovic/awesome-linux',
      },
      {
        title: 'awesome-bash',
        url: 'https://github.com/awesome-lists/awesome-bash',
      },
    ],
  },

  reddit: {
    title: 'Reddit',
    icon: "<i class='fa fa-reddit'></i>",
    links: [
      {
        title: 'Reddit',
        url: 'https://www.reddit.com/',
      },
      {
        title: 'r/unix',
        url: 'https://www.reddit.com/r/unixporn/',
      },
      {
        title: 'r/hacking',
        url: 'https://www.reddit.com/r/hacking/',
      },
      {
        title: 'r/archlinux',
        url: 'https://www.reddit.com/r/archlinux/',
      },
      {
        title: 'r/CEH',
        url: 'https://www.reddit.com/r/CEH/',
      },
      {
        title: 'r/django',
        url: 'https://www.reddit.com/r/django/',
      },
      {
        title: 'r/gentoo',
        url: 'https://www.reddit.com/r/gentoo/',
      },
      {
        title: 'r/javascript',
        url: 'https://www.reddit.com/r/javascript/',
      },
      {
        title: 'r/LearnJapanese',
        url: 'https://www.reddit.com/r/LearnJapanese/',
      },
      {
        title: 'r/linux',
        url: 'https://www.reddit.com/r/linux/',
      },
      {
        title: 'r/LiveOverflow',
        url: 'https://www.reddit.com/r/LiveOverflow/',
      },
      {
        title: 'r/lockpicking',
        url: 'https://www.reddit.com/r/lockpicking/',
      },
      {
        title: 'r/pothos',
        url: 'https://www.reddit.com/r/pothos/',
      },
      {
        title: 'r/programming',
        url: 'https://www.reddit.com/r/programming/',
      },
      {
        title: 'r/ps3hacks',
        url: 'https://www.reddit.com/r/ps3hacks/',
      },
      {
        title: 'r/Python',
        url: 'https://www.reddit.com/r/Python/',
      },
      {
        title: 'r/rails',
        url: 'https://www.reddit.com/r/rails/',
      },
      {
        title: 'r/reactjs',
        url: 'https://www.reddit.com/r/reactjs/',
      },
      {
        title: 'r/startpages',
        url: 'https://www.reddit.com/r/startpages/',
      },
    ],
  },

  modding: {
    title: 'Modding',
    icon: "<i class='fa fa-gamepad'></i>",
    links: [
      {
        title: 'Semjases',
        url: 'https://www.semjases.com/',
      },
      {
        title: 'Last Team Standing',
        url: 'https://lastteamstanding.uk/',
      },
      {
        title: 'ConsoleCrunch',
        url: 'https://consolecrunch.com/',
      },
      {
        title: 'NextGenUpdate',
        url: 'https://www.nextgenupdate.com/',
      },
      {
        title: 'r/ps3hacks',
        url: 'https://www.reddit.com/r/ps3hacks/',
      },
    ],
  },

  security: {
    title: 'Security',
    icon: "<i class='fa fa-user-secret'></i>",
    links: [
      {
        title: 'Hack The Box',
        url: 'https://www.hackthebox.eu/',
      },
      {
        title: 'OverTheWire',
        url: 'https://overthewire.org/wargames/',
      },
      {
        title: 'r/hacking',
        url: 'https://www.reddit.com/r/hacking/',
      },
      {
        title: 'r/CEH',
        url: 'https://www.reddit.com/r/CEH/',
      },
      {
        title: 'Awesome-Hacking',
        url: 'https://github.com/Hack-with-Github/Awesome-Hacking',
      },
      {
        title: 'awesome-web-security',
        url: 'https://github.com/qazbnm456/awesome-web-security',
      },
      {
        title: 'awesome-pentest',
        url: 'https://github.com/enaqx/awesome-pentest',
      },
      {
        title: 'r/LiveOverflow',
        url: 'https://www.reddit.com/r/LiveOverflow/',
      },
      {
        title: 'awesome-ctf',
        url: 'https://github.com/apsdehal/awesome-ctf',
      },
      {
        title: 'awesome-infosec',
        url: 'https://github.com/onlurking/awesome-infosec',
      },
      {
        title: 'awesome-pentest-cheat-sheets',
        url: 'https://github.com/coreb1t/awesome-pentest-cheat-sheets',
      },
      {
        title: 'PENTESTING-BIBLE',
        url: 'https://github.com/blaCCkHatHacEEkr/PENTESTING-BIBLE',
      },
      {
        title: 'personal-security-checklist',
        url: 'https://github.com/Lissy93/personal-security-checklist',
      },
    ],
  },

  lock: {
    title: 'Lock',
    icon: "<i class='fa fa-lock'></i>",
    links: [
      {
        title: 'Sparrows Lock Picks',
        url: 'https://www.sparrowslockpicks.ca/',
      },
      {
        title: 'r/lockpicking',
        url: 'https://www.reddit.com/r/lockpicking/',
      },
    ],
  },

  vivarium: {
    title: 'Vivarium',
    icon: "<i class='fa fa-pagelines'></i>",
    links: [
      {
        title: 'Understory Enterprises inc',
        url: 'https://www.understoryenterprises.com/',
      },
      {
        title: 'Dendroboard',
        url: 'https://www.dendroboard.com/',
      },
      {
        title: 'Frog Forum',
        url: 'https://www.frogforum.net/',
      },
      {
        title: 'r/pothos',
        url: 'https://www.reddit.com/r/pothos/',
      },
    ],
  },

  geology: {
    title: 'Geology',
    icon: "<i class='fas fa-gem'></i>",
    links: [
      {
        title: 'Numista',
        url: 'https://en.numista.com/',
      },
    ],
  },

  language: {
    title: 'Language',
    icon: "<i class='fas fa-globe-americas'></i>",
    links: [
      {
        title: 'Hello Talk',
        url: 'https://www.hellotalk.com/',
      },
      {
        title: 'r/LearnJapanese',
        url: 'https://www.reddit.com/r/LearnJapanese/',
      },
    ],
  },

  math: {
    title: 'Math',
    icon: "<i class='fas fa-square-root-alt'></i>",
    links: [
      {
        title: 'awesome-math',
        url: 'https://github.com/rossant/awesome-math',
      },
      {
        title: 'Ebay - bluenose48',
        url: 'https://www.ebay.ca/usr/bluenose48',
      },
    ],
  },

  api: {
    title: 'API',
    icon: "<i class='fas fa-network-wired'></i>",
    links: [
      {
        title: 'Awesome_APIs',
        url: 'https://github.com/TonnyL/Awesome_APIs',
      },
      {
        title: 'r/lockpicking',
        url: 'https://www.reddit.com/r/lockpicking/',
      },
    ],
  },

  fontsIcons: {
    title: 'Fonts & Icons',
    icon: "<i class='fas fa-network-wired'></i>",
    links: [
      {
        title: 'Awesome_APIs',
        url: 'https://github.com/TonnyL/Awesome_APIs',
      },
      {
        title: 'r/lockpicking',
        url: 'https://www.reddit.com/r/lockpicking/',
      },
    ],
  },

  currency: {
    title: 'Currency',
    icon: "<i class='fas fa-coins'></i>",
    links: [
      {
        title: 'Numista',
        url: 'https://en.numista.com/',
      },
      {
        title: 'Ebay - bluenose48',
        url: 'https://www.ebay.ca/usr/bluenose48',
      },
    ],
  },

  crypto: {
    title: 'Crypto',
    icon: "<i class='fa fa-bitcoin'></i>",
    links: [
      {
        title: 'Blockchain',
        url: 'https://www.blockchain.com/explorer',
      },
      {
        title: 'awesome-coins',
        url: 'https://github.com/Zheaoli/awesome-coins',
      },
    ],
  },

  work: {
    title: 'Work',
    icon: "<i class='fas fa-user-tie'></i>",
    links: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/',
      },
      {
        title: 'Creddle',
        url: 'https://creddle.io',
      },
      {
        title: 'Resume',
        url: 'https://www.linkedin.com/',
      },
      {
        title: 'Cover Letter',
        url:
          'https://docs.google.com/document/d/1vBvq5dRNKbPVk8db3RG_XTBG6oiOSH-OCO1x9UPGCzI/edit',
      },
      {
        title: 'Thank You Letter',
        url:
          'https://docs.google.com/document/d/1iRMbfdK9etSLQ7qqXBq1NCN-2bNkcfv3Bw08VR4Y8SI/edit',
      },
      {
        title: 'LHL Job Board',
        url:
          'https://docs.google.com/spreadsheets/d/1npQfrosQEvg2omoxd7tpi-EBX2KPLmk_W0q-SWDnTco/edit#gid=0',
      },
      {
        title: 'Indeed',
        url: 'https://ca.indeed.com',
      },
      {
        title: 'GlassDoor',
        url: 'glassdoor.ca/',
      },
      {
        title: 'BCtechjobs',
        url: 'https://www.bctechjobs.ca/',
      },
      {
        title: 'Remote.co',
        url: 'https://remote.co/',
      },
      {
        title: 'Remotive.io',
        url: 'https://remotive.io/',
      },
      {
        title: 'Viatec',
        url: 'https://www.viatec.ca/jobs',
      },
      {
        title: 'awesome-interview-questions',
        url: 'https://github.com/MaximAbramchuck/awesome-interview-questions',
      },
      {
        title: 'Awesome-CV',
        url: 'https://github.com/posquit0/Awesome-CV',
      },
      {
        title: 'Technical-Interview-Megarepo',
        url: 'https://github.com/jdsutton/Technical-Interview-Megarepo',
      },
      {
        title: 'Viatec',
        url: 'https://www.viatec.ca/jobs',
      },
    ],
  },
};

if (!localStorage.getItem('bookmarks')) {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

const parsedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));

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
      <div class='card-body'>
        <ul>
          ${links.join(' ')}
        </ul>
      </div>
    </div>
  `);
}
const cardContainer = document.getElementById('card-container');
cardContainer.innerHTML += cards.join(' ');

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
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  hours = hours % 12 || 12;
  minutes = minutes.toString().length === 2 ? minutes : '0' + minutes;
  const amOrPm = now.getHours() >= 12 ? 'pm' : 'am';

  const time = `${hours} <span id='clock-colon'>:</span> ${minutes} ${amOrPm}`;
  const dayOfWeek = now.getDay();
  const month = now.getMonth();
  const dayOfMonth = now.getDate();
  const year = now.getFullYear();
  const date = `${days[dayOfWeek]}, ${months[month]} ${dayOfMonth} ${year}`;

  document.getElementById('time').innerHTML = time;
  document.getElementById('date').innerHTML = date;

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

const attachBGModal = () => {
  const bgPicker = document.getElementById('bg-picker');

  let images = [
    './img/bg/0433.png',
    './img/bg/1540443829364.jpg',
    './img/bg/1544578961967.jpg',
    './img/bg/1544700636875.jpg',
    './img/bg/1545522913536.jpg',
    './img/bg/leaf.jpeg',
    './img/bg/Lotus.png',
    './img/bg/minimalist-sunset-scenery-landscape-digital-art-uhdpaper.com-4K-6.1039.jpg',
    './img/bg/neon-shallows.jpg',
    './img/bg/On83yqV.png',
    './img/bg/pexels-photo-239659.jpeg',
    './img/bg/uv.jpg',
    './img/bg/wall2.jpg',
    './img/bg/wall3.jpg',
    './img/bg/wall4.jpg',
    './img/bg/wall6.jpg',
    './img/bg/wall9.jpg',
    './img/bg/wallhaven-39k7qy.png',
    './img/bg/wall.jpg_',
  ];

  images = images.map((img) => {
    return `<img class='bg-preview' src='${img}' onClick="setBG('${img}')" />`;
  });

  images = images.join(' ');

  if (bgPicker.classList.contains('bg-picker-hidden')) {
    bgPicker.classList.remove('bg-picker-hidden');
    bgPicker.innerHTML += images;
  } else {
    bgPicker.classList.add('bg-picker-hidden');
  }
};

const setBG = (img) => {
  document.body.style.backgroundImage = `url(${img})`;
  document.body.style.backgroundPosition = 'center center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundSize = 'cover';
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

  const newBookmark = { title, url };
  const parsedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  parsedBookmarks[category.toLowerCase()].links.push(newBookmark);
  localStorage.setItem('bookmarks', JSON.stringify(parsedBookmarks));
};

const addCategory = () => {
  const title = document.getElementById('category-title-input').value;
  const icon = document.getElementById('category-icon-input').value;

  // Turn title to camel case for key
  const camelize = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '')
      .replace(/[^a-zA-Z ]/g, '') // Remove special characters
      .replace(/[0-9]/g, ''); // Remove all numbers
  };

  const key = camelize(title);

  if (!title || !icon) {
    const modal = document.getElementById('modal');
    const errorMessage = `<p id='error-message'>Error: All fields must be valid.</p>`;
    modal.innerHTML += errorMessage;
    return;
  }

  const parsedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  parsedBookmarks[key] = {
    title: title,
    icon: icon,
    links: [],
  };
  localStorage.setItem('bookmarks', JSON.stringify(parsedBookmarks));
};
