// axios.get(`api.openweathermap.org/data/2.5/weather?q=${Victoria}&appid=${KEY}`)
// .then(res => console.log(res))

const bookmark_list = [
  {title: 'GitHub', category: 'category', url: 'https://github.com/dreamxinxcode'},
  {title: 'title', category: 'category', url: 'www.google.com'},
  {title: 'title', category: 'category', url: 'www.google.com'}
];

const bookmarks = bookmark_list.map(bookmark => {
  return `<li><a href='${bookmark.url}'>${bookmark.title}</a></li>`
});

document.getElementById('test-ul').innerHTML = bookmarks;

const updateClock = () => {
  const now = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const time = `${now.getHours()} : ${now.getMinutes()}`;

  document.getElementById('time').innerHTML = time;

  setTimeout(updateClock, 1000);
};

updateClock();