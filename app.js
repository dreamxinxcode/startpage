const axios = require('axios');

const KEY = 'e0d88f84620009644667c282466ed877';
axios.get(`api.openweathermap.org/data/2.5/weather?q=${Victoria}&appid=${KEY}`)
.then(res => console.log(res))

const bookmark_list = [
  {title: 'title', category: 'category', url: 'www.google.com'},
  {title: 'title', category: 'category', url: 'www.google.com'},
  {title: 'title', category: 'category', url: 'www.google.com'}
];

const bookmarks = bookmark_list.map(bookmark => {
  return `<a href='${bookmark.url}'>${bookmark.title}</a>`
});

document.getElementById('test').innerHTML = bookmarks;