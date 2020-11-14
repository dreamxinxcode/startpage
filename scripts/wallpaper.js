const attachBGModal = () => {
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

  const bgPicker = document.getElementById('bg-picker');
  images = images.join(' ');
  bgPicker.innerHTML += images;
};

attachBGModal();

const toggleBGPicker = () => {
  const bgPicker = document.getElementById('bg-picker');
  if (bgPicker.classList.contains('bg-picker-hidden')) {
    bgPicker.classList.remove('bg-picker-hidden');
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
