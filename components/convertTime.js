export default function convertTime(input, inputType) {
  let numSeconds, numMinutes, out;
  if (inputType === 'seconds') {
    numSeconds = input % 60;
    if (numSeconds.toString().length < 2) numSeconds = "0"+numSeconds;
    numMinutes = Math.floor(input / 60)
    if (numMinutes.toString().length < 2) numMinutes = "0"+numMinutes;

    out = `${numMinutes}:${numSeconds}`
    return out 
  } else if (inputType === 'display') {
    numSeconds = parseInt(input.slice(3));
    numMinutes = parseInt(input.slice(0,2));
    out = numMinutes * 60 + numSeconds;
    return out;
  }
}