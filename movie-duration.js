// Translates a IMDB runtime string to a Date().
function parseDuration(runtimeString) {
  let time = 0;
  let current = "";

  if (runtimeString) {
    runtimeString = runtimeString.split(" ").join("");
    for (let i = 0; i < runtimeString.length; i++) {
      let char = runtimeString[i];
      if (!isNaN(Number.parseInt(char))) {
        current += char;
      } else {
        const amount = current ? Number.parseInt(current) : 0;
        switch (char) {
          case "m":
            time += amount * 60;
            break;
          case "h":
            time += amount * 60 * 60;
            break;
          default:
            break;
        }
        current = "";
      }
    }
  }

  return { estimatedWatchedDate: addSeconds(new Date(), time), seconds: time };
}

function addSeconds(date, seconds) {
  date.setSeconds(date.getSeconds() + seconds);
  return date;
}

module.exports = parseDuration;
