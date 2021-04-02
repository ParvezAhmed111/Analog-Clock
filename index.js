setInterval(() => {
  dt = new Date();
  hour_time = dt.getHours();
  min_time = dt.getMinutes();
  sec_time = dt.getSeconds();

  hour_rotation = 30 * hour_time + min_time / 2 + sec_time / 120;
  min_rotation = 6 * min_time + sec_time / 10;
  sec_rotation = 6 * sec_time;

  hour.style.transform = `rotate(${hour_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

function displayDate() {
  var names = [
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
  let date = dt.getDate();
  let month = dt.getMonth();
  let year = dt.getFullYear();
  if (date < 10) {
    date= `0${date}`;
  } else {
    date= `${date}`;
  }

  document.getElementById("date").innerHTML =
    `${date} - ` + names[`${month}`] + ` - ${year}`;
}

function displayDay() {
  var names = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = dt.getDay();
  document.getElementById("day").innerHTML = names[`${day}` - 1];
}
