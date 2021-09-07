export default function validation(displayTime) {
  let fix = null;
  if (displayTime.length === 5) {
    if (validTimeRange(displayTime)) return [true, fix];
  } else if (displayTime.length === 4) {
    if (!displayTime.includes(":")) fix = displayTime.slice(0,2) + ":" + displayTime.slice(2);
    else if (displayTime[1] === ":") fix = "0" + displayTime;
    else if (displayTime[2] === ":") fix = displayTime + "0";

    if (fix && validTimeRange(fix)) return [true, fix];
  } else if (displayTime.length === 3) {
    if (displayTime[2] === ":") fix = displayTime + "00";
    else if (displayTime[0] === ":") fix = "00" + displayTime;

    if (fix && validTimeRange(fix)) return [true, fix];
  } else if (displayTime.length === 2) {
    fix = displayTime + ":00";
    if (fix && validTimeRange(fix)) return [true, fix];
  } else return [false, fix];
}

function validTimeRange(displayTime) {
  let minCheck = parseInt(displayTime.slice(0,2));
  minCheck = minCheck >= 0 && minCheck <= 99;
  let secCheck = parseInt(displayTime.slice(3));
  secCheck = secCheck >= 0 && secCheck < 60;

  if (minCheck && secCheck) return true;
  return false;
}