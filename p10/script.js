let cDate;
let cYear;
let daysInyear;
let daysInfeb;
let cMonth;
let cDay;
let cHours;
let cMinutes;
let cSeconds;
let nYear;

setInterval(main, 1000);

function main() {
  cDate = new Date();

  cYear = cDate.getFullYear();
  cMonth = cDate.getMonth() + 1;
  cDay = cDate.getDate();
  cHours = cDate.getHours();
  cMinutes = cDate.getMinutes();
  cSeconds = cDate.getSeconds();
  nYear = cYear + 1;

  document.getElementById("main_text").innerHTML = "New Year " + nYear;

  if (cYear % 4 == 0) {
    daysInyear = 366;
    daysInfeb = 29;
  } else {
    daysInyear = 365;
    daysInfeb = 28;
  }

  switch (cMonth) {
    case 1:
      document.getElementById("days").innerHTML = daysInyear - cDay;
      break;
    case 2:
      document.getElementById("days").innerHTML = daysInyear - (31 + cDay);
      break;
    case 3:
      document.getElementById("days").innerHTML =
        daysInyear - (31 + daysInfeb + cDay);
      break;
    case 4:
      document.getElementById("days").innerHTML =
        daysInyear - (62 + daysInfeb + cDay);
      break;
    case 5:
      document.getElementById("days").innerHTML =
        daysInyear - (92 + daysInfeb + cDay);
      break;
    case 6:
      document.getElementById("days").innerHTML =
        daysInyear - (123 + daysInfeb + cDay);
      break;
    case 7:
      document.getElementById("days").innerHTML =
        daysInyear - (153 + daysInfeb + cDay);
      break;
    case 8:
      document.getElementById("days").innerHTML =
        daysInyear - (184 + daysInfeb + cDay);
      break;
    case 9:
      document.getElementById("days").innerHTML =
        daysInyear - (215 + daysInfeb + cDay);
      break;
    case 10:
      document.getElementById("days").innerHTML =
        daysInyear - (245 + daysInfeb + cDay);
      break;
    case 11:
      document.getElementById("days").innerHTML =
        daysInyear - (276 + daysInfeb + cDay);
      break;
    case 12:
      document.getElementById("days").innerHTML =
        daysInyear - (306 + daysInfeb + cDay);
      break;
  }

  document.getElementById("seconds").innerHTML = 60 - (cSeconds + 1);
  document.getElementById("minutes").innerHTML = 60 - (cMinutes + 1);
  document.getElementById("hours").innerHTML = 24 - (cHours + 1);
}
