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